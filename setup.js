import express from 'express';
import cors from 'cors';
import pool from './database.js';
import sendTelegramMessage from './sendMessage.js';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/vacancies', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query('SELECT * FROM vacancies_data WHERE is_active = 1');
      const vacancies = result.rows;
      res.json(vacancies);
      client.release();
    } catch (err) {
      console.error(err);
      res.status(500).send('Ошибка получения вакансий из базы данных');
    }
  });

  app.get('/vacancy/community-manager', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Community Менеджер'");
      const vacancy = result.rows;
      res.json(vacancy);
      client.release();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Ошибка получения информации из базы данных');
    }
  });

  app.get('/vacancy/jun-3d-artists', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior 3D Artist'");
      const vacancy = result.rows;
      res.json(vacancy);
      client.release();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Ошибка получения информации из базы данных');
    }
  });

  app.get('/vacancy/jun-backend-dev', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior BackEnd Разработчик'");
      const vacancy = result.rows;
      res.json(vacancy);
      client.release();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Ошибка получения информации из базы данных');
    }
  });

  app.get('/vacancy/jun-frontend-dev', async (req, res) => {
    try {
      const client = await pool.connect();
      const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior FrontEnd Разработчик'");
      const vacancy = result.rows;
      res.json(vacancy);
      client.release();
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Ошибка получения информации из базы данных');
    }
  });

  app.get('/vacancy/jun-graph-des', async (req, res) => {
      try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior Графический Дизайнер'");
        const vacancy = result.rows;
        res.json(vacancy);
        client.release();
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка получения информации из базы данных');
      }
    });
  
    app.get('/vacancy/jun-qa', async (req, res) => {
      try {
        const client = await pool.connect();
        const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior QA Engineer'");
        const vacancy = result.rows;
        res.json(vacancy);
        client.release();
      } catch (err) {
        console.error(err.message);
        res.status(500).send('Ошибка получения информации из базы данных');
      }
    });

    
app.get('/vacancy/jun-render-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior Render Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/jun-ui-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Junior UI/UX Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/lead-3d-artist', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead 3D Artist'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/lead-community-manager', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead Community Менеджер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});


app.get('/vacancy/lead-graph-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead Графический Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/lead-qa', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead QA'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/lead-render-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead Render Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/lead-ui-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead UI/UX Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/lead-web', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Lead Web'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/middle-3d-artist', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Middle 3D Artist'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/middle-back-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Middle BackEnd Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/middle-graph-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Middle Графический Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/middle-qa', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Middle QA Engineer'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/middle-render-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Middle Render Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/middle-ui-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Middle UI/UX Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-3d-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior 3D Artist'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-back-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior BackEnd Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-front-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior FrontEnd Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-graph-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior Графический Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-qa', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior QA Engineer'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-render-dev', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior Render Разработчик'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});

app.get('/vacancy/senior-ui-des', async (req, res) => {
  try {
    const client = await pool.connect();
    const result = await client.query("SELECT * FROM vacancies_pages WHERE title='Senior UI/UX Дизайнер'");
    const vacancy = result.rows;
    res.json(vacancy);
    client.release();
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Ошибка получения информации из базы данных');
  }
});


app.post('/sendApplicationData', async (req, res) => {
    try {
      const formData = req.body;
      await sendTelegramMessage(formData);
      
      res.status(200).send('Данные успешно отправлены');
    } catch (error) {
      console.error('Ошибка обработки данных:', error);
      res.status(500).send('Произошла ошибка');
    }
});
  
  app.listen(3001, () => {
  });

