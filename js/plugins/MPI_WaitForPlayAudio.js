//===========================================================================
// MPI_WaitForPlayAudio.js
//===========================================================================

/*:
 * @plugindesc BGM、BGS、ME、SEの演奏が開始されるまでウェイトする機能を提供します。
 * @author 奏ねこま（おとぶき ねこま）
 *
 * @param BGMの演奏開始まで常にウェイト
 * @desc イベントコマンド「BGMの演奏」実行時、this.setWaitMode('bgm')を自動で実行させる場合は true を指定してください。
 * @default false
 *
 * @param BGSの演奏開始まで常にウェイト
 * @desc イベントコマンド「BGSの演奏」実行時、this.setWaitMode('bgs')を自動で実行させる場合は true を指定してください。
 * @default false
 *
 * @param MEの演奏開始まで常にウェイト
 * @desc イベントコマンド「MEの演奏」実行時、this.setWaitMode('me')を自動で実行させる場合は true を指定してください。
 * @default false
 *
 * @param SEの演奏開始まで常にウェイト
 * @desc イベントコマンド「SEの演奏」実行時、this.setWaitMode('se')を自動で実行させる場合は true を指定してください。
 * @default false
 *
 * @param BGM演奏開始ウェイト切替スイッチ
 * @desc BGM演奏開始時の自動ウェイトのON/OFFを切り替えるスイッチの番号を指定してください。
 * @default 0
 *
 * @param BGS演奏開始ウェイト切替スイッチ
 * @desc BGS演奏開始時の自動ウェイトのON/OFFを切り替えるスイッチの番号を指定してください。
 * @default 0
 *
 * @param ME演奏開始ウェイト切替スイッチ
 * @desc ME演奏開始時の自動ウェイトのON/OFFを切り替えるスイッチの番号を指定してください。
 * @default 0
 *
 * @param SE演奏開始ウェイト切替スイッチ
 * @desc SE演奏開始時の自動ウェイトのON/OFFを切り替えるスイッチの番号を指定してください。
 * @default 0
 *
 * @help
 * [ 概要 ] ...
 *  BGM、BGS、ME、SEなどの音声を演奏する際、それぞれに対応したスクリプトを実行す
 *  ることで、演奏開始までウェイト状態（イベントが進まないよう）にします。
 *
 * [ 使用方法 ] ...
 *  ・イベントコマンド「BGMの演奏」時、演奏開始までウェイトをかける場合
 *    「BGMの演奏」の直後に、イベントコマンド「スクリプト」で、以下のスクリプト
 *    を実行してください。
 *
 *     this.setWaitMode('bgm');
 *
 *  ・イベントコマンド「BGSの演奏」時、演奏開始までウェイトをかける場合
 *    「BGSの演奏」の直後に、イベントコマンド「スクリプト」で、以下のスクリプト
 *    を実行してください。
 *
 *     this.setWaitMode('bgs');
 *
 *  ・イベントコマンド「MEの演奏」時、演奏開始までウェイトをかける場合
 *    「MEの演奏」の直後に、イベントコマンド「スクリプト」で、以下のスクリプトを
 *    実行してください。
 *
 *     this.setWaitMode('me');
 *
 *  ・イベントコマンド「SEの演奏」時、演奏開始までウェイトをかける場合
 *    「SEの演奏」の直後に、イベントコマンド「スクリプト」で、以下のスクリプトを
 *    実行してください。
 *
 *     this.setWaitMode('se');
 *
 * [ プラグインパラメータ ] ...
 *  ・BGMの演奏開始まで常にウェイト
 *    このパラメータを true にすると、イベントコマンド「BGMの演奏」実行時に
 *    this.setWaitMode('bgm');を自動で実行します。
 *
 *  ・BGSの演奏開始まで常にウェイト
 *    このパラメータを true にすると、イベントコマンド「BGSの演奏」実行時に
 *    this.setWaitMode('bgs');を自動で実行します。
 *
 *  ・MEの演奏開始まで常にウェイト
 *    このパラメータを true にすると、イベントコマンド「MEの演奏」実行時に
 *    this.setWaitMode('me');を自動で実行します。
 *
 *  ・SEの演奏開始まで常にウェイト
 *    このパラメータを true にすると、イベントコマンド「SEの演奏」実行時に
 *    this.setWaitMode('se');を自動で実行します。
 *
 *  ・BGM演奏開始ウェイト切替スイッチ
 *    このパラメータに指定した番号のスイッチが、BGMの演奏時の自動ウェイトを切り
 *    替えるスイッチになります。指定のスイッチがONの間、プラグインパラメータの
 *    「BGMの演奏開始まで常にウェイト」の設定と逆の状態になります。
 *
 *  ・BGS演奏開始ウェイト切替スイッチ
 *    このパラメータに指定した番号のスイッチが、BGSの演奏時の自動ウェイトを切り
 *    替えるスイッチになります。指定のスイッチがONの間、プラグインパラメータの
 *    「BGSの演奏開始まで常にウェイト」の設定と逆の状態になります。
 *
 *  ・ME演奏開始ウェイト切替スイッチ
 *    このパラメータに指定した番号のスイッチが、MEの演奏時の自動ウェイトを切り替
 *    えるスイッチになります。指定のスイッチがONの間、プラグインパラメータの
 *    「MEの演奏開始まで常にウェイト」の設定と逆の状態になります。
 *
 *  ・SE演奏開始ウェイト切替スイッチ
 *    このパラメータに指定した番号のスイッチが、SEの演奏時の自動ウェイトを切り替
 *    えるスイッチになります。指定のスイッチがONの間、プラグインパラメータの
 *    「SEの演奏開始まで常にウェイト」の設定と逆の状態になります。
 *
 * [ プラグインコマンド ] ...
 *  プラグインコマンドはありません。
 *
 * [ 利用規約 ] ................................................................
 *  ・本プラグインの利用は、RPGツクールMV/RPGMakerMVの正規ユーザーに限られます。
 *  ・商用、非商用、有償、無償、一般向け、成人向けを問わず、利用可能です。
 *  ・利用の際、連絡や報告は必要ありません。また、製作者名の記載等も不要です。
 *  ・プラグインを導入した作品に同梱する形以外での再配布、転載はご遠慮ください。
 *  ・不具合対応以外のサポートやリクエストは、基本的に受け付けておりません。
 *  ・本プラグインにより生じたいかなる問題についても、一切の責任を負いかねます。
 * [ 改訂履歴 ] ................................................................
 *   Version 1.00  2016/11/25  First edition.
 * -+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-
 *  Web Site: http://makonet.sakura.ne.jp/rpg_tkool/
 *  Twitter : https://twitter.com/koma_neko
 *  Copylight (c) 2016 Nekoma Otobuki
 */

var Imported = Imported || {};
Imported.MPI_WaitForPlayAudio = true;

var Makonet = Makonet || {};
Makonet.WPA = {};

(function(){
    'use strict';

    var WPA        = Makonet.WPA;
    WPA.product    = 'MPI_WaitForPlayAudio';
    WPA.parameters = PluginManager.parameters(WPA.product);
    WPA.autoWait = { bgm:  WPA.parameters['BGMの演奏開始まで常にウェイト'] === 'true',
                     bgs:  WPA.parameters['BGSの演奏開始まで常にウェイト'] === 'true',
                      me:  WPA.parameters['MEの演奏開始まで常にウェイト']  === 'true',
                      se:  WPA.parameters['SEの演奏開始まで常にウェイト']  === 'true' };
    WPA.switchId = { bgm: +WPA.parameters['BGM演奏開始ウェイト切替スイッチ'],
                     bgs: +WPA.parameters['BGS演奏開始ウェイト切替スイッチ'],
                      me: +WPA.parameters['ME演奏開始ウェイト切替スイッチ'],
                      se: +WPA.parameters['SE演奏開始ウェイト切替スイッチ'] };
    WPA.modules = {};
    
    //==============================================================================
    // AudioManager
    //==============================================================================

    var _AudioManager = WPA.modules['AudioManager'] = {};
    
    _AudioManager.isBgmReady = function() {
        return !this._bgmBuffer || this._bgmBuffer.isReady();
    }.bind(AudioManager);
    
    _AudioManager.isBgsReady = function() {
        return !this._bgsBuffer || this._bgsBuffer.isReady();
    }.bind(AudioManager);
    
    _AudioManager.isMeReady = function() {
        return !this._meBuffer || this._meBuffer.isReady();
    }.bind(AudioManager);
    
    _AudioManager.isSeReady = function() {
        return this._seBuffers.every(function(buffer) {
            return !buffer || buffer.isReady();
        });
    }.bind(AudioManager);

    //==============================================================================
    // Game_Interpreter
    //==============================================================================

    (function(o, p) {
        var f = o[p]; o[p] = function() {
            var waitMode = this._waitMode;
            var waiting = f.apply(this, arguments);
            this._waitMode = waitMode;
            switch (this._waitMode) {
                case 'bgm':
                    waiting = !_AudioManager.isBgmReady();
                    break;
                case 'bgs':
                    waiting = !_AudioManager.isBgsReady();
                    break;
                case 'me':
                    waiting = !_AudioManager.isMeReady();
                    break;
                case 'se':
                    waiting = !_AudioManager.isSeReady();
                    break;
            }
            if (!waiting) {
                this._waitMode = '';
            }
            return waiting;
        };
    }(Game_Interpreter.prototype, 'updateWaitMode'));

    (function(o, p) {
        var f = o[p]; o[p] = function() {
            var wait = !!(WPA.autoWait.bgm ^ (WPA.switchId.bgm && $gameSwitches.value(WPA.switchId.bgm)));
            if (wait) {
                this.setWaitMode('bgm');
            }
            return f.apply(this, arguments);
        };
    }(Game_Interpreter.prototype, 'command241'));

    (function(o, p) {
        var f = o[p]; o[p] = function() {
            var wait = !!(WPA.autoWait.bgs ^ (WPA.switchId.bgs && $gameSwitches.value(WPA.switchId.bgs)));
            if (wait) {
                this.setWaitMode('bgs');
            }
            return f.apply(this, arguments);
        };
    }(Game_Interpreter.prototype, 'command245'));
    
    (function(o, p) {
        var f = o[p]; o[p] = function() {
            var wait = !!(WPA.autoWait.me ^ (WPA.switchId.me && $gameSwitches.value(WPA.switchId.me)));
            if (wait) {
                this.setWaitMode('me');
            }
            return f.apply(this, arguments);
        };
    }(Game_Interpreter.prototype, 'command249'));
    
    (function(o, p) {
        var f = o[p]; o[p] = function() {
            var wait = !!(WPA.autoWait.se ^ (WPA.switchId.se && $gameSwitches.value(WPA.switchId.se)));
            if (wait) {
                this.setWaitMode('se');
            }
            return f.apply(this, arguments);
        };
    }(Game_Interpreter.prototype, 'command250'));
    
}());