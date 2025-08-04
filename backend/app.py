from flask import Flask, jsonify
import random
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/api/metrics')
def get_metrics():
    return jsonify({
        "latency": round(random.uniform(20, 100), 2),
        "packet_loss": round(random.uniform(0, 5), 2),
        "throughput": round(random.uniform(100, 1000), 2)
    })

if __name__ == '__main__':
    app.run(debug=True)
