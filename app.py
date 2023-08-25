from flask import Flask, request, jsonify
import wikipedia

app = Flask(__name__)

@app.route('/get_response', methods=['GET'])
def get_response():
    question = request.args.get('question')
    response = get_wikipedia_summary(question)
    return jsonify({'response': response})

def get_wikipedia_summary(query):
    try:
        summary = wikipedia.summary(query)
        return summary
    except wikipedia.exceptions.DisambiguationError as e:
        return "Desculpe, sua pergunta é ambígua. Por favor, seja mais específico."
    except wikipedia.exceptions.PageError as e:
        return "Desculpe, não encontrei informações relevantes para sua pergunta."

if __name__ == '__main__':
    app.run(debug=True)
