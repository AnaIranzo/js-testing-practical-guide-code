import {it, expect, describe} from 'vitest';
import { generateToken, generateTokenPromise } from './async-examples';

describe('generateToken', ()=> {
it('should generate a token value', (done) => {
        const testUserEmail = 'test@test.com';

        generateToken(testUserEmail, (err, token) => {
            
            

            try {
                expect(token).toBeDefined();
                //expect(token).toBe(2);
                done();
            } catch (error) {
                done(err)
            }
        })
    })
})

describe('generateTokenPromise', () => {
it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

    return
  expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value', async () => {
    const testUserEmail = 'test@test.com';
  
    const token = await generateTokenPromise(testUserEmail);
  
    expect(token).toBeDefined();
  });
});

