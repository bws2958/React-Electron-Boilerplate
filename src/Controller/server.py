from flask import Flask

app = Flask(__name__)

@app.route('/users')
def users():
    return {
        "memberList" : [
            {"id": 1, "name": "simon"},
            {"id": 2, "name": "mike"}
        ]
    }

app.run(host='127.0.0.1', port=5000, debug=True)