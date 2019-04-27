from googletrans import Translator
from flask import Flask, abort, request
from flask_restplus import Resource, Api, reqparse, fields
from flask_sqlalchemy import SQLAlchemy

import os


app = Flask(__name__)
api = Api(app, title='API', description='peer note API', default="Actions",  default_label=None)
basedir = os.path.abspath(os.path.dirname(__file__))
app.config['SQLALCHEMY_DATABASE_URI'] =  'sqlite:///' + os.path.join(basedir, 'database')
db = SQLAlchemy(app)


class Record(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    # hash = db.Column(db.H)
    text = db.Column(db.String(255), nullable = False)
    transType = db.Column(db.Integer, nullable = False)
    rank = db.Column(db.String(120), unique=True, nullable=False)
    trans = db.Column(db.String(255), nullable=False)



@api.route('/getTranslation')
class First(Resource):
    @api.doc(body=api.model("payload", {"text":fields.String(description="translation text",required=True)}))
    # @api.doc(responses={200: 'Success'})
    def post(self):
        payload = request.get_json()
        text = payload["text"]
        translator = Translator()
        transObj = translator.translate(text)
        records = Record.query.filter_by(text=text).all()
        if not records:

        print("record",record)
        # print(text)
        # parser = reqparse.RequestParser()
        # parser.add_argument('q')
        # args = parser.parse_args()
        return transObj.text, 200


if __name__ == '__main__':
    db.create_all()
    # create_db('data.db')
    app.run(debug=True)
    