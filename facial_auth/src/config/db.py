# src/config/db.py
import mysql.connector #instalar: pip install mysql-connector-python // verificar : pip show mysql-connector-python
from mysql.connector import Error
import os

def get_connection():
    try:
        connection = mysql.connector.connect(
            host=os.environ.get('DB_HOST', 'localhost'),
            database=os.environ.get('DB_NAME', 'colpryst_col3'),
            user=os.environ.get('DB_USER', 'root'),
            password=os.environ.get('DB_PASSWORD', 'admin123')
        )
        if connection.is_connected():
            print("✅ Conexión a la base de datos exitosa")
            return connection
    except Error as e:
        print(f"❌ Error al conectar a la base de datos: {e}")
        return None
