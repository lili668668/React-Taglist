// �o��ϥ� HtmlWebpackPlugin�A�N bundle �n�� <script> ���J�� body�C${__dirname} �� ES6 �y�k������ __dirname  
const HtmlWebpackPlugin = require('html-webpack-plugin');

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: `${__dirname}/app/index.html`,
  filename: 'index.html',
  inject: 'body',
});

module.exports = {
  // �ɮװ_�l�I�q entry �i�J�A�]���O�}�C�ҥH�]�i�H�O�h���ɮ�
  entry: [
    './app/index.js',
  ],
  // output �O��J���ͥX�Ӫ����G�������Ѽ�
  output: {
    path: `${__dirname}/dist`,
    filename: 'index_bundle.js',
  },
  module: {
  	// loaders �h�O����ϥΪ� loaders�A�b�o��O�ϥ� babel-loader �N�Ҧ� .js�]�o��Ψ쥿�h���^�����ɮס]�ư��F npm �w�˪��M���m node_modules�^��Ķ���s�����i�H�\Ū�� JavaScript�Cpreset �h�O�ϥΪ� babel ��Ķ�W�h�A�o��ϥ� react�Bes2015�C�Y�O�w�g��W�ϥ� .babelrc �@�� presets �]�w���ܡA�h�i�H�ٲ� query
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
        },
      },
    ],
  },
  // devServer �h�O webpack-dev-server �]�w
  devServer: {
    inline: true,
    port: 8008,
  },
  // plugins ��m�ҨϥΪ��~��
  plugins: [HTMLWebpackPluginConfig],
};