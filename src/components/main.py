import logging
from user_dashboard.config import Config
from user_dashboard.routes import app
from user_dashboard.database import db

if __name__ == '__main__':
    logging.basicConfig(level=logging.INFO)
    config = Config()
    app.config.from_object(config)
    db.init_app(app)
    app.run(debug=config.DEBUG, host=config.HOST, port=config.PORT)