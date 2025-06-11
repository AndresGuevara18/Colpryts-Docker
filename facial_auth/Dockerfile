# Dockerfile para facial_auth (FastAPI + DeepFace)
FROM python:3.10-slim

# Evita prompts de interacción
ENV DEBIAN_FRONTEND=noninteractive

# Actualiza pip antes de instalar dependencias
RUN python -m pip install --upgrade pip

# Instala dependencias del sistema necesarias para opencv y deepface
RUN apt-get update && \
    apt-get install -y build-essential libgl1 libglib2.0-0 && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
