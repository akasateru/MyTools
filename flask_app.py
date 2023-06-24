from flask import Flask, render_template, redirect, url_for


app = Flask(__name__)


@app.route("/")
def hello_world():
  return redirect(url_for('pomodoro'))


@app.route('/pomodoro')
def pomodoro():
  return render_template("pomodoro.html")


if __name__ == "__main__":
  app.run(host="0.0.0.0", port=5000)