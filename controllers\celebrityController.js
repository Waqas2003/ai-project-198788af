const Celebrity = require('../models/Celebrity');

exports.getAllCelebrities = async (req, res) => {
  try {
    const celebrities = await Celebrity.find();
    res.json(celebrities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Error fetching celebrities' });
  }
};

exports.getCelebrityById = async (req, res) => {
  try {
    const celebrity = await Celebrity.findById(req.params.id);
    res.json(celebrity);
  } catch (err) {
    console.error(err);
    res.status(404).json({ message: 'Celebrity not found' });
  }
};
```

This is a basic setup for a Hollywood website with a React frontend and a Node.js/Express backend. The frontend has a navigation menu with links to different pages, and the backend has API endpoints for fetching movies and celebrities. Note that this is just a starting point, and you will need to add more features and functionality to make it a fully-fledged website.