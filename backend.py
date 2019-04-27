from googletrans import Translator
from flask import Flask, abort, request
from flask_restplus import Resource, Api, reqparse, fields
from flask_sqlalchemy import SQLAlchemy

import os


app = Flask(__name__)
api = Api(app, title='API', description='peer note API', default="Actions",  default_label=None)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] =  'sqlite:///' + os.path.join(basedir, 'database/database.db')
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)


class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # hash = db.Column(db.H)
    text = db.Column(db.String(255), nullable = False)
    transType = db.Column(db.Integer, nullable = False)
    upvotes = db.Column(db.Integer, nullable=False)
    downvotes = db.Column(db.Integer, nullable=False)
    trans = db.Column(db.String(255), nullable=False)

lookup = { 
    'google':1,
    'microsoft':2,
    'user':3,
}

def getGoogleTrans(text):
    translator = Translator()
    transObj = translator.translate(text)
    return transObj.text

@api.route('/vote')
class First(Resource):
    @api.doc(body=api.model("payload", {
        "id":fields.Integer(description="the rating identifier",required=True), 
        "updown":fields.Boolean(description="downvote:0 upvote:1",required=True)}))
    def post(self):
        payload = request.get_json()
        ident = payload["id"]
        updown = payload["updown"]
        records = Record.query.filter_by(id=ident).first()
        if updown == True:
            records.upvotes = records.upvotes + 1 
        else:
            records.downvotes = records.downvotes + 1
        db.session.commit()
        return 200
        # i
        # records.
        # records = Record.query.filter_by(text=text).all()


@api.route('/getTranslation')
class First(Resource):
    @api.doc(body=api.model("payload", {"text":fields.String(description="translation text",required=True)}))
    # @api.doc(responses={200: 'Success'})
    def post(self):
        payload = request.get_json()
        text = payload["text"]
        records = Record.query.filter_by(text=text).all()
        if not records:
            trans = getGoogleTrans(text)
            record = Record(text=text, transType=lookup['google'],rank=0, trans=trans)
            db.session.add(record)
            db.session.commit()
            return {
            "records":[{
                'id': record.id,
                'text': record.text, 
                'transType': record.transType,
                'rank': record.rank,
                'trans': record.trans,
            }]}, 200
        else:
            return {
            "records":[{
                'id': record.id,
                'text': record.text, 
                'transType': record.transType,
                'rank': record.rank,
                'trans': record.trans,
            } for record in records]},200
    
    
    # def patch(self):
    #     return 200     
        # print("record",record)
        # print(text)
        # parser = reqparse.RequestParser()
        # parser.add_argument('q')
        # args = parser.parse_args()
        # return transObj.text, 200


if __name__ == '__main__':
    db.create_all()
    # create_db('data.db')
    app.run(debug=True)
    