import os
from flask import Flask, render_template

app = Flask(__name__, static_folder="dist")

# Ensure the Jinja template is found
app.template_folder = os.path.join(os.getcwd(), "templates")

@app.route("/")
def home():
    """
    Renders the main page of the application.
    Passes a simple message to the Jinja template.
    """
    return render_template("index.html")

if __name__ == "__main__":
    # The debug flag is useful for development as it provides a reloader and debugger.
    app.run(debug=True)
