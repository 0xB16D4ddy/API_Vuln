from flask import Flask, jsonify, Response, request, json
import requests

# Route cho việc fetch content từ URL được chỉ định

app = Flask(__name__)

# Route cho việc fetch content từ URL được chỉ định


@app.route("/api/fetch", methods=["POST"])
def fetch_content():
    try:
        url = request.json.get("url")

        # Chỉ cho phép fetch từ domain "example.com"
        # if "example.com" not in url:
        #     return jsonify({"error": "Invalid URL"}), 400

        # Thực hiện yêu cầu fetch từ URL
        response = requests.get(url)
        content = response.text

        # return jsonify({"content": content})
        return content
    except Exception as e:
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
