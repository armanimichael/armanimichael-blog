const fs = require('fs/promises');
const yaml = require('js-yaml');

const getCategories = async () => {
  const categories = [];
  try {
    const file = await fs.readFile('./src/configs/categories.json', 'utf-8');
    const parsed = JSON.parse(file);

    console.log('Generating categories...');
    parsed.forEach(category => categories.push(category.name));
  } catch (err) {
    console.log(err);
  }

  return categories;
};

(async function (path) {
  try {
    const file = await fs.readFile(path, 'utf8');
    const doc = yaml.safeLoad(file);

    for (const field of doc.collections[0].fields) {
      if (field.name === 'category') {
        field.options = await getCategories();
      }
    }

    fs.writeFile(path, yaml.safeDump(doc));
  } catch (err) {
    console.log(err);
  }
})('./static/admin/config.yml');
