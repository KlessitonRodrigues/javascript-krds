var Neutralino = (function (e) {
  'use strict';
  function t(e, t, n, i) {
    return new (n || (n = Promise))(function (o, r) {
      function s(e) {
        try {
          c(i.next(e));
        } catch (e) {
          r(e);
        }
      }
      function a(e) {
        try {
          c(i.throw(e));
        } catch (e) {
          r(e);
        }
      }
      function c(e) {
        var t;
        e.done
          ? o(e.value)
          : ((t = e.value),
            t instanceof n
              ? t
              : new n(function (e) {
                  e(t);
                })).then(s, a);
      }
      c((i = i.apply(e, t || [])).next());
    });
  }
  function n(e, t) {
    let n = new CustomEvent(e, { detail: t });
    return window.dispatchEvent(n), Promise.resolve({ success: !0, message: 'Message dispatched' });
  }
  let i,
    o = {},
    r = [],
    s = {};
  function a() {
    window.NL_TOKEN && sessionStorage.setItem('NL_TOKEN', window.NL_TOKEN),
      (i = new WebSocket(`ws://${window.location.hostname}:${window.NL_PORT}`)),
      (function () {
        if (
          (Neutralino.events.on('ready', () =>
            t(this, void 0, void 0, function* () {
              if ((yield u(r), !window.NL_EXTENABLED)) return;
              let e = yield Neutralino.extensions.getStats();
              for (let t of e.connected) n('extensionReady', t);
            })
          ),
          Neutralino.events.on('extClientConnect', e => {
            n('extensionReady', e.detail);
          }),
          !window.NL_EXTENABLED)
        )
          return;
        Neutralino.events.on('extensionReady', e =>
          t(this, void 0, void 0, function* () {
            e.detail in s && (yield u(s[e.detail]), delete s[e.detail]);
          })
        );
      })(),
      (function () {
        i.addEventListener('message', e => {
          var t, r;
          const s = JSON.parse(e.data);
          s.id && s.id in o
            ? ((null === (t = s.data) || void 0 === t ? void 0 : t.error)
                ? (o[s.id].reject(s.data.error),
                  'NE_RT_INVTOKN' == s.data.error.code &&
                    (i.close(),
                    (document.body.innerText = ''),
                    document.write(
                      '<code>NE_RT_INVTOKN</code>: Neutralinojs application configuration prevents accepting native calls from this client.'
                    )))
                : (null === (r = s.data) || void 0 === r ? void 0 : r.success) &&
                  o[s.id].resolve(
                    s.data.hasOwnProperty('returnValue') ? s.data.returnValue : s.data
                  ),
              delete o[s.id])
            : s.event && n(s.event, s.data);
        }),
          i.addEventListener('open', e =>
            t(this, void 0, void 0, function* () {
              n('ready');
            })
          ),
          i.addEventListener('close', e =>
            t(this, void 0, void 0, function* () {
              n('serverOffline', {
                code: 'NE_CL_NSEROFF',
                message: 'Neutralino server is offline. Try restarting the application',
              });
            })
          );
      })();
  }
  function c(e, t) {
    return new Promise((n, s) => {
      if ((null == i ? void 0 : i.readyState) != WebSocket.OPEN)
        return (a = { method: e, data: t, resolve: n, reject: s }), void r.push(a);
      var a;
      const c = '10000000-1000-4000-8000-100000000000'.replace(/[018]/g, e =>
          (e ^ (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (e / 4)))).toString(16)
        ),
        u = window.NL_TOKEN || sessionStorage.getItem('NL_TOKEN') || '';
      (o[c] = { resolve: n, reject: s }),
        i.send(JSON.stringify({ id: c, method: e, data: t, accessToken: u }));
    });
  }
  function u(e) {
    return t(this, void 0, void 0, function* () {
      for (; e.length > 0; ) {
        let t = e.shift();
        try {
          let e = yield c(t.method, t.data);
          t.resolve(e);
        } catch (e) {
          t.reject(e);
        }
      }
    });
  }
  function d(e) {
    let t = new Uint8Array(e),
      n = '';
    for (let e of t) n += String.fromCharCode(e);
    return window.btoa(n);
  }
  var l,
    f,
    w = Object.freeze({
      __proto__: null,
      createDirectory: function (e) {
        return c('filesystem.createDirectory', { path: e });
      },
      removeDirectory: function (e) {
        return c('filesystem.removeDirectory', { path: e });
      },
      writeFile: function (e, t) {
        return c('filesystem.writeFile', { path: e, data: t });
      },
      appendFile: function (e, t) {
        return c('filesystem.appendFile', { path: e, data: t });
      },
      writeBinaryFile: function (e, t) {
        return c('filesystem.writeBinaryFile', { path: e, data: d(t) });
      },
      appendBinaryFile: function (e, t) {
        return c('filesystem.appendBinaryFile', { path: e, data: d(t) });
      },
      readFile: function (e) {
        return c('filesystem.readFile', { path: e });
      },
      readBinaryFile: function (e) {
        return new Promise((t, n) => {
          c('filesystem.readBinaryFile', { path: e })
            .then(e => {
              let n = window.atob(e),
                i = n.length,
                o = new Uint8Array(i);
              for (let e = 0; e < i; e++) o[e] = n.charCodeAt(e);
              t(o.buffer);
            })
            .catch(e => {
              n(e);
            });
        });
      },
      removeFile: function (e) {
        return c('filesystem.removeFile', { path: e });
      },
      readDirectory: function (e) {
        return c('filesystem.readDirectory', { path: e });
      },
      copyFile: function (e, t) {
        return c('filesystem.copyFile', { source: e, destination: t });
      },
      moveFile: function (e, t) {
        return c('filesystem.moveFile', { source: e, destination: t });
      },
      getStats: function (e) {
        return c('filesystem.getStats', { path: e });
      },
    });
  !(function (e) {
    (e.WARNING = 'WARNING'), (e.ERROR = 'ERROR'), (e.INFO = 'INFO'), (e.QUESTION = 'QUESTION');
  })(l || (l = {})),
    (function (e) {
      (e.OK = 'OK'),
        (e.OK_CANCEL = 'OK_CANCEL'),
        (e.YES_NO = 'YES_NO'),
        (e.YES_NO_CANCEL = 'YES_NO_CANCEL'),
        (e.RETRY_CANCEL = 'RETRY_CANCEL'),
        (e.ABORT_RETRY_IGNORE = 'ABORT_RETRY_IGNORE');
    })(f || (f = {}));
  var p = Object.freeze({
    __proto__: null,
    get Icon() {
      return l;
    },
    get MessageBoxChoice() {
      return f;
    },
    execCommand: function (e, t) {
      return c('os.execCommand', Object.assign({ command: e }, t));
    },
    spawnProcess: function (e) {
      return c('os.spawnProcess', { command: e });
    },
    updateSpawnedProcess: function (e, t, n) {
      return c('os.updateSpawnedProcess', { id: e, event: t, data: n });
    },
    getSpawnedProcesses: function () {
      return c('os.getSpawnedProcesses');
    },
    getEnv: function (e) {
      return c('os.getEnv', { key: e });
    },
    showOpenDialog: function (e, t) {
      return c('os.showOpenDialog', Object.assign({ title: e }, t));
    },
    showFolderDialog: function (e) {
      return c('os.showFolderDialog', { title: e });
    },
    showSaveDialog: function (e, t) {
      return c('os.showSaveDialog', Object.assign({ title: e }, t));
    },
    showNotification: function (e, t, n) {
      return c('os.showNotification', { title: e, content: t, icon: n });
    },
    showMessageBox: function (e, t, n, i) {
      return c('os.showMessageBox', { title: e, content: t, choice: n, icon: i });
    },
    setTray: function (e) {
      return c('os.setTray', e);
    },
    open: function (e) {
      return c('os.open', { url: e });
    },
    getPath: function (e) {
      return c('os.getPath', { name: e });
    },
  });
  var m = Object.freeze({
    __proto__: null,
    getMemoryInfo: function () {
      return c('computer.getMemoryInfo');
    },
  });
  var g,
    v = Object.freeze({
      __proto__: null,
      setData: function (e, t) {
        return c('storage.setData', { key: e, data: t });
      },
      getData: function (e) {
        return c('storage.getData', { key: e });
      },
    });
  !(function (e) {
    (e.WARNING = 'WARNING'), (e.ERROR = 'ERROR'), (e.INFO = 'INFO');
  })(g || (g = {}));
  var _ = Object.freeze({
    __proto__: null,
    get LoggerType() {
      return g;
    },
    log: function (e, t) {
      return c('debug.log', { message: e, type: t });
    },
  });
  var N = Object.freeze({
    __proto__: null,
    exit: function (e) {
      return c('app.exit', { code: e });
    },
    killProcess: function () {
      return c('app.killProcess');
    },
    restartProcess: function (e) {
      return new Promise(n =>
        t(this, void 0, void 0, function* () {
          let t = window.NL_ARGS.reduce((e, t) => (e += ' ' + t), '');
          (null == e ? void 0 : e.args) && (t += ' ' + e.args),
            yield Neutralino.os.execCommand(t, { background: !0 }),
            Neutralino.app.exit(),
            n();
        })
      );
    },
    getConfig: function () {
      return c('app.getConfig');
    },
    broadcast: function (e, t) {
      return c('app.broadcast', { event: e, data: t });
    },
  });
  const h = new WeakMap();
  var y = Object.freeze({
    __proto__: null,
    setTitle: function (e) {
      return c('window.setTitle', { title: e });
    },
    getTitle: function () {
      return c('window.getTitle');
    },
    maximize: function () {
      return c('window.maximize');
    },
    unmaximize: function () {
      return c('window.unmaximize');
    },
    isMaximized: function () {
      return c('window.isMaximized');
    },
    minimize: function () {
      return c('window.minimize');
    },
    setFullScreen: function () {
      return c('window.setFullScreen');
    },
    exitFullScreen: function () {
      return c('window.exitFullScreen');
    },
    isFullScreen: function () {
      return c('window.isFullScreen');
    },
    show: function () {
      return c('window.show');
    },
    hide: function () {
      return c('window.hide');
    },
    isVisible: function () {
      return c('window.isVisible');
    },
    focus: function () {
      return c('window.focus');
    },
    setIcon: function (e) {
      return c('window.setIcon', { icon: e });
    },
    move: function (e, t) {
      return c('window.move', { x: e, y: t });
    },
    setDraggableRegion: function (e) {
      return new Promise((n, i) => {
        const o = e instanceof Element ? e : document.getElementById(e);
        let r = 0,
          s = 0;
        if (!o) return i({ code: 'NE_WD_DOMNOTF', message: 'Unable to find DOM element' });
        if (h.has(o))
          return i({
            code: 'NE_WD_ALRDREL',
            message: 'This DOM element is already an active draggable region',
          });
        function a(e) {
          return t(this, void 0, void 0, function* () {
            yield Neutralino.window.move(e.screenX - r, e.screenY - s);
          });
        }
        function c(e) {
          0 === e.button &&
            ((r = e.clientX),
            (s = e.clientY),
            o.addEventListener('pointermove', a),
            o.setPointerCapture(e.pointerId));
        }
        function u(e) {
          o.removeEventListener('pointermove', a), o.releasePointerCapture(e.pointerId);
        }
        o.addEventListener('pointerdown', c),
          o.addEventListener('pointerup', u),
          h.set(o, { pointerdown: c, pointerup: u }),
          n({ success: !0, message: 'Draggable region was activated' });
      });
    },
    unsetDraggableRegion: function (e) {
      return new Promise((t, n) => {
        const i = e instanceof Element ? e : document.getElementById(e);
        if (!i) return n({ code: 'NE_WD_DOMNOTF', message: 'Unable to find DOM element' });
        if (!h.has(i))
          return n({
            code: 'NE_WD_NOTDRRE',
            message: 'DOM element is not an active draggable region',
          });
        const { pointerdown: o, pointerup: r } = h.get(i);
        i.removeEventListener('pointerdown', o),
          i.removeEventListener('pointerup', r),
          h.delete(i),
          t({ success: !0, message: 'Draggable region was deactivated' });
      });
    },
    setSize: function (e) {
      return new Promise((n, i) =>
        t(this, void 0, void 0, function* () {
          let t = yield Neutralino.window.getSize();
          c('window.setSize', (e = Object.assign(Object.assign({}, t), e)))
            .then(e => {
              n(e);
            })
            .catch(e => {
              i(e);
            });
        })
      );
    },
    getSize: function () {
      return c('window.getSize');
    },
    getPosition: function () {
      return c('window.getPosition');
    },
    setAlwaysOnTop: function (e) {
      return c('window.setAlwaysOnTop', { onTop: e });
    },
    create: function (e, t) {
      return new Promise((n, i) => {
        function o(e) {
          return 'string' != typeof e || ((e = e.trim()).includes(' ') && (e = `"${e}"`)), e;
        }
        let r = window.NL_ARGS.reduce(
          (e, t, n) => (
            (t.includes('--path=') ||
              t.includes('--debug-mode') ||
              t.includes('--load-dir-res') ||
              0 == n) &&
              (e += ' ' + o(t)),
            e
          ),
          ''
        );
        r += ' --url=' + o(e);
        for (let e in t) {
          if ('processArgs' == e) continue;
          r += ` --window${e.replace(/[A-Z]|^[a-z]/g, e => '-' + e.toLowerCase())}=${o(t[e])}`;
        }
        t && t.processArgs && (r += ' ' + t.processArgs),
          Neutralino.os
            .execCommand(r, { background: !0 })
            .then(e => {
              n(e);
            })
            .catch(e => {
              i(e);
            });
      });
    },
  });
  var E = Object.freeze({
    __proto__: null,
    broadcast: function (e, t) {
      return c('events.broadcast', { event: e, data: t });
    },
    on: function (e, t) {
      return (
        window.addEventListener(e, t),
        Promise.resolve({ success: !0, message: 'Event listener added' })
      );
    },
    off: function (e, t) {
      return (
        window.removeEventListener(e, t),
        Promise.resolve({ success: !0, message: 'Event listener removed' })
      );
    },
    dispatch: n,
  });
  var O = Object.freeze({
    __proto__: null,
    dispatch: function (e, n, i) {
      return new Promise((o, r) =>
        t(this, void 0, void 0, function* () {
          let t = yield Neutralino.extensions.getStats();
          if (t.loaded.includes(e))
            if (t.connected.includes(e))
              try {
                let t = yield c('extensions.dispatch', { extensionId: e, event: n, data: i });
                o(t);
              } catch (e) {
                r(e);
              }
            else
              !(function (e, t) {
                e in s ? s[e].push(t) : (s[e] = [t]);
              })(e, {
                method: 'extensions.dispatch',
                data: { extensionId: e, event: n, data: i },
                resolve: o,
                reject: r,
              });
          else r({ code: 'NE_EX_EXTNOTL', message: `${e} is not loaded` });
        })
      );
    },
    broadcast: function (e, t) {
      return c('extensions.broadcast', { event: e, data: t });
    },
    getStats: function () {
      return c('extensions.getStats');
    },
  });
  let R = null;
  var b = Object.freeze({
    __proto__: null,
    checkForUpdates: function (e) {
      return new Promise((n, i) =>
        t(this, void 0, void 0, function* () {
          if (!e) return i({ code: 'NE_RT_NATRTER', message: 'Missing require parameter: url' });
          try {
            let t = yield fetch(e);
            (R = JSON.parse(yield t.text())),
              !(function (e) {
                return !!(
                  e.applicationId &&
                  e.applicationId == window.NL_APPID &&
                  e.version &&
                  e.resourcesURL
                );
              })(R)
                ? i({
                    code: 'NE_UP_CUPDMER',
                    message: 'Invalid update manifest or mismatching applicationId',
                  })
                : n(R);
          } catch (e) {
            i({ code: 'NE_UP_CUPDERR', message: 'Unable to fetch update manifest' });
          }
        })
      );
    },
    install: function () {
      return new Promise((e, n) =>
        t(this, void 0, void 0, function* () {
          if (!R) return n({ code: 'NE_UP_UPDNOUF', message: 'No update manifest loaded' });
          try {
            let t = yield fetch(R.resourcesURL),
              n = yield t.arrayBuffer();
            yield Neutralino.filesystem.writeBinaryFile(window.NL_PATH + '/resources.neu', n),
              e({ success: !0, message: 'Update installed. Restart the process to see updates' });
          } catch (e) {
            n({ code: 'NE_UP_UPDINER', message: 'Update installation error' });
          }
        })
      );
    },
  });
  var T = Object.freeze({
    __proto__: null,
    readText: function (e, t) {
      return c('clipboard.readText', { key: e, data: t });
    },
    writeText: function (e) {
      return c('clipboard.writeText', { data: e });
    },
  });
  let P = !1;
  return (
    (e.app = N),
    (e.clipboard = T),
    (e.computer = m),
    (e.debug = _),
    (e.events = E),
    (e.extensions = O),
    (e.filesystem = w),
    (e.init = function () {
      P ||
        (a(),
        window.NL_ARGS.find(e => '--neu-dev-auto-reload' == e) &&
          Neutralino.events.on('neuDev_reloadApp', () =>
            t(this, void 0, void 0, function* () {
              yield Neutralino.debug.log('Reloading the application...'), location.reload();
            })
          ),
        (window.NL_CVERSION = '3.5.0'),
        (window.NL_CCOMMIT = '2ddbba6eaf458560f4f191d1a67603e365291ac4'),
        (P = !0));
    }),
    (e.os = p),
    (e.storage = v),
    (e.updater = b),
    (e.window = y),
    Object.defineProperty(e, '__esModule', { value: !0 }),
    e
  );
})({});
