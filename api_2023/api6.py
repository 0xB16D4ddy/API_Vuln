from flask import jsonify, Response, request, json
import requests
from flask import Flask, request, jsonify

app = Flask(__name__)

users = {
    "user1": {"role": "standard"},
    "user2": {"role": "admin"},
}

coupons = {
    "DISCOUNT_10": {"used": False},
    "DISCOUNT_20": {"used": False},
}


@app.route("/", methods=["POST"])
def sensitive_business_flow():
    data = request.json
    user_id = data.get("UserId")
    coupon_code = data.get("CouponCode")

    if user_id not in users:
        return jsonify({"error": "Invalid user"}), 401

    user_role = users[user_id]["role"]

    if user_role == "admin":
        if coupon_code and coupon_code in coupons and not coupons[coupon_code]["used"]:
            
            result = f"Sensitive data for admin with {coupon_code} discount applied"
            
            coupons[coupon_code]["used"] = True
            return jsonify({"result": result})
        else:
            return jsonify({"error": "Invalid or already used coupon"}), 400
    else:
        return jsonify({"error": "Unauthorized access"}), 403


if __name__ == "__main__":
    app.run(debug=True)
