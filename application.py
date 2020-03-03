from flask import Flask, render_template, redirect

app = Flask(__name__)

@app.route('/', methods=['GET'])
def home():
	return render_template('index.html')

@app.route('/random', methods=['GET'])
def random():
	return render_template('random.html')

@app.route('/custom', methods=['GET'])
def custom():
    return render_template('custom.html')

if __name__ == '__main__':
	app.run(debug=True)
