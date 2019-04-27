from googletrans import Translator
from flask import Flask, abort, request
from flask_restplus import Resource, Api, reqparse, fields
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
api = Api(app, title='API', description='peer note API', default="Actions",  default_label=None)


@api.route('/getTranslation')
class First(Resource):
    @api.doc(body=api.model("payload", {"text":fields.String(description="translation text",required=True)}))
    # @api.doc(responses={200: 'Success'})
    def post(self):
        payload = request.get_json()
        text = payload["text"]
        translator = Translator()
        transObj =translator.translate(text)
        # print(text)
        # parser = reqparse.RequestParser()
        # parser.add_argument('q')
        # args = parser.parse_args()
        return transObj.text, 200

if __name__ == '__main__':
    
    # create_db('data.db')
    app.run(debug=True)