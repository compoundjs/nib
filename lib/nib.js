var path = require('path');

exports.init = function (compound) {
  var utils = compound.utils;

  var assetsCompiler = compound.assetsCompiler;
  if(!assetsCompiler) throw new Error('AssetsCompiler is not loaded!')

  // Get Stylus compiler
  var stylusCompiler = assetsCompiler.compilers['stylus'];
  if(!stylusCompiler) throw new Error('AssetsCompiler\'s Stylus compiler is not available!');

  // Find nib's location
  var nibPath = require.resolve('nib');

  // Add nib/lib directory as include path
  if(!stylusCompiler.options) stylusCompiler.options = {};
  stylusCompiler.options.paths = (stylusCompiler.options.paths || []).concat(
    [ path.resolve( nibPath, '..' ) ]
  );
};