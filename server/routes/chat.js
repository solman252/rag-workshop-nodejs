// TODO: Build the prompt using query + result.answer
// TODO: Use openai.createCompletion() to generate response

/**
 * Jest test for the /api/chat route with mocked OpenAI response
 */

jest.mock('openai', () => {
    const mockCreateCompletion = jest.fn().mockResolvedValue({
      data: {
        choices: [{ text: "Mocked AI response." }]
      }
    });
  
    return {
      Configuration: jest.fn(),
      OpenAIApi: jest.fn().mockImplementation(() => ({
        createCompletion: mockCreateCompletion
      }))
    };
  });
  
  const request = require('supertest');
  const express = require('express');
  const bodyParser = require('body-parser');
  const chatRoute = require('../server/routes/chat');
  
  // Setup express app
  const app = express();
  app.use(bodyParser.json());
  app.use('/api/chat', chatRoute);
  
  describe('POST /api/chat', () => {
    test('should return a mocked AI response', async () => {
      const response = await request(app)
        .post('/api/chat')
        .send({ query: "What is Node.js?" });
  
      expect(response.statusCode).toBe(200);
      expect(response.body).toHaveProperty('answer');
      expect(response.body.answer).toBe("Mocked AI response.");
    });
  
    test('should return 400 if query is missing', async () => {
      const response = await request(app)
        .post('/api/chat')
        .send({});
  
      expect(response.statusCode).toBe(400);
      expect(response.body).toHaveProperty('error');
    });
  });