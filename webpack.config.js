import webpack from "webpack";
import path from 'path';
import {fileURLToPath} from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


const PATHS = {
  entryPoint4Browser: path.resolve(__dirname, 'src/index-node.ts'),
  bundles: path.resolve(__dirname, '_bundles'),
}


var browserConfig = {
  entry: {
    'esm1': [PATHS.entryPoint4Browser],
    'esm1.min': [PATHS.entryPoint4Browser]
  },
  target: 'web',
  externals: { 
    // "node:fs": "{}",
    // "node:zlib": "{}",
    // "node:util": "{}",
    // "node:url": "{}",
    // "node:stream": "{}",
    // "node:stream/web": "{}",
    // "node:process": "{}",
    // "node:path": "{}",
    // "node:net": "{}",
    // "node:http": "{}",
    // "node:https": "{}",
    // "node:buffer": "{}",
    // "worker_threads": "{}",
    // "buffer": "{}",
  },
  output: {
    path: PATHS.bundles,
    libraryTarget: 'umd',
    library: 'esm1',
    umdNamedDefine: true
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    extensionAlias: {
      '.js': ['.ts', '.js'],
      '.mjs': ['.mts', '.mjs']
    }
  },
  devtool: 'source-map',
  plugins: [
  ],
  module: {  
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        use: 'ts-loader',
        exclude: ["/node_modules/","/src/Box-node.ts"],
        
      },
    ],
  }
}

export default (env, argv) => {
  return [browserConfig];
};


