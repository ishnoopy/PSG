const fs = require('fs');
const path = require('path');

class psgController {
	loadModel(modelName) {
		const modelPath = path.join(process.cwd(), 'models', `${modelName}.js`);
		if (!fs.existsSync(modelPath)) {
		  throw new Error(`Model file not found: ${modelPath}`);
		}
		const ModelClass = require(modelPath);
		global[modelName] = ModelClass;
	  }
  }
  

module.exports = psgController;