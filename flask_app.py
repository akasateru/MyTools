from flask import Flask, render_template


app = Flask(__name__)


@app.route("/")
def hello_world():
  return render_template("top.html")


@app.route('/pomodoro')
def projects():
  return render_template("pomodoro.html")


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000, debug=True)