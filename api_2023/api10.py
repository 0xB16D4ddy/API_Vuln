from flask import Flask, jsonify, Response, request, json
import requests

api_key = "API_KEY"

app = Flask(__name__)

@app.route("/api/getNews", methods=["POST"])
def get_news_data():
    api_url = "https://api.news.com/news"
    
    headers = {
        "Authorization": api_key
    }
    
    response = requests.get(api_url, headers=headers)
    data = response.json()
    
    print(data)
    return data

if __name__ == "__main__":
    app.run(debug=True)
