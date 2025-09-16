from flask import Flask, request, jsonify
from utils.abc_analysis import abc_classification

app = Flask(__name__)

@app.route("/abc", methods=["POST"])
def abc():
    data = request.json.get("products", [])
    result = abc_classification(data)
    return jsonify(result)

if __name__ == "__main__":
    app.run(port=5000, debug=True)
