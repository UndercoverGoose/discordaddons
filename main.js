/* stores main functions and information */
window.discordAddons = {
  auth: [localStorage.getItem('auth'), null], /* plugged into array in the event that the object is logged it doesn't reveal token */
  globalize: function() { /* globalize functions like localStorage and sessionStorage which are removed by discord */
    console.log("%cDiscord Addons | Globalizing variables...",window.discordAddons.vars.console.passive);
    try {
      window.localStorage = window.discordAddons.vars.localStorage;
      console.log("%cDiscord Addons <Globalize.localStorage>| Success!",window.discordAddons.vars.console.success);
    }catch(err) {
      console.log("%cDiscord Addons <Globalize.localStorage> | " + err,window.discordAddons.vars.console.error);
    }
    try {
      window.sessionStorage = window.discordAddons.vars.sessionStorage;
      console.log("%cDiscord Addons <Globalize.sessionStorage>| Success!",window.discordAddons.vars.console.success);
    }catch(err) {
      console.log("%cDiscord Addons <Globalize.sessionStorage> | " + err,window.discordAddons.vars.console.error);
    }
  },
  vars: { /* variables */
    console: {
      passive: "display:block;background:#7777FF;padding:10px;border:3px solid #3333AA;border-radius:5px;color:black;",
      success: "display:block;background:#77FF77;padding:10px;border:3px solid #33AA33;border-radius:5px;color:black;",
      warning: "display:block;background:#FFFF77;padding:10px;border:3px solid #AAAA33;border-radius:5px;color:black;",
      error: "display:block;background:#FF7777;padding:10px;border:3px solid #AA3333;border-radius:5px;color:black;"
    },
    localStorage: localStorage, /* ;D */
    sessionStorage: sessionStorage
  }
}

console.log("%cDiscord Addons | Loaded",window.discordAddons.vars.console.passive);

if(window.discordAddons.auth[0] === null) { /* tells user if authorization is missing */
  console.log("%cDiscord Addons | Authorization code not stored in localStorage! Make sure to set window.discordAddons.vars.localStorage.setItem('auth', 'yourAuthToken')",window.discordAddons.vars.console.error);
}

/* my custom status */
(async function() {
  try {
    function getTimeTill() {
      let cTime = new Date();
      let sTime = cTime.toString().split(" GMT")[0];
      let tt = "";
      let p = "School starts in ", e = "👎";

      if(["Mon","Tue","Wed","Thu","Fri"].indexOf(cTime.toString().slice(0, 3)) !== -1) {
        if((cTime.getHours() < 7) || (cTime.getHours() === 7 && cTime.getMinutes() < 55)) {
          tt = format((new Date(sTime.slice(0, sTime.lastIndexOf(" ")) + " 7:55:00")) - cTime.getTime());
        }else if((cTime.getHours() >= 15) || (cTime.getHours() === 14 && cTime.getMinutes() > 47)) {
          if(cTime.toString().slice(0, 3) === "Fri") {
            tt = format((new Date(addDay(sTime, 3).slice(0, 15) + " 7:55:00")) - cTime.getTime());
          }else {
            tt = format((new Date(addDay(sTime, 1).slice(0, 15) + " 7:55:00")) - cTime.getTime());
          }
        }else if(cTime.getHours() === 7 && cTime.getMinutes() >= 55) {
          p = "", e = "😖", tt = "School just started...";
        }else if(cTime.getHours() === 14 && cTime.getMinutes() >= 42 && cTime.getMinutes() <= 47) {
          p = "", e = "😏", tt = "School ended!";
        }else if((cTime.getHours() >= 8 && cTime.getHours() <= 14) || (cTime.getHours() === 14 && cTime.getMinutes() < 42)) {
          p = "School ends in ", e = "👍";
          tt = format((new Date(sTime.slice(0, 15) + " 14:42:00")) - cTime.getTime());
        }else {
          console.log("%cDiscord Addons <Custom Status> | Time: " + new Date().getTime() + ", did not get evaluated!",window.discordAddons.vars.console.error);
        }
      }else {
        if(cTime.toString().slice(0, 3) === "Sat") {
          tt = format((new Date(addDay(sTime, 2).slice(0, 15) + " 7:55:00")) - cTime.getTime());
        }else if(cTime.toString().slice(0, 3) === "Sun") {
          tt = format((new Date(addDay(sTime, 1).slice(0, 15) + " 7:55:00")) - cTime.getTime());
        }else {
          console.log("%cDiscord Addons <Custom Status> | new Date() returned an invalid day of the week! new Date().toString().slice(0,3) responds with: " + (new Date().toString().slice(0,3)),window.discordAddons.vars.console.error);
        }
      }
      function buildDate(s) {
        return `${s[0]} ${s[1]} ${s[2]} ${s[3]} ${s[4][0]}:${s[4][1]}:${s[4][2]}`;
      }
      function splitDate(str) {
        let s = str.split(" ");
        let i = s[4].split(":");
        return [s[0], s[1], parseInt(s[2]), parseInt(s[3]), [parseInt(i[0]), parseInt(i[1]), parseInt(i[2])]];
      }
      function addDay(a, t) {
        s = a;
        if(typeof a === "string") {
          s = splitDate(a);
        }
        let mo = ["Jan", "Feb", "Mar", "Apr", "May"], mv = [31, 28, 31, 30, 31], newDay = s[2] + t, newMon = s[1];
        if(newDay > mv[mo.indexOf(s[1])]) {
          newDay = t - (mv[mo.indexOf(s[1])] - s[2]);
          newMon = mo[mo.indexOf(newMon) + 1];
        }
        s[1] = newMon, s[2] = newDay;
        if(typeof a === "string") {
          return buildDate(s);
        }else {
          return s;
        }
      }
      function calcTillMon() {
        return addDay(sTime, 3 - ["Fri","Sat","Sun"].indexOf(splitDate(sTime)[0]));
      }
      function format(time) {
        time = time / 1000;

        let days = Math.floor(time / 86400);
        time -= days * 86400;
        days = days.toString();
        if(days.length === 1) {
          days = "0" + days;
        }

        let hours = Math.floor(time / 3600);
        time -= hours * 3600;
        hours = hours.toString();
        if(hours.length === 1) {
          hours = "0" + hours;
        }

        let minutes = Math.floor(time / 60);
        time -= minutes * 60;
        minutes = minutes.toString();
        if(minutes.length === 1) {
          minutes = "0" + minutes;
        }

        let seconds = Math.floor(time);
        seconds = seconds.toString();
        if(seconds.length === 1) {
          seconds = "0" + seconds;
        }
        if(parseInt(days) === 0) {
          if(parseInt(hours) === 0) {
            if(parseInt(minutes) === 0) {
              return parseInt(seconds);
            }else {
              return `${minutes}:${seconds}`;
            }
          }else {
            return `${hours}:${minutes}:${seconds}`;
          }
        }else {
          return `${days}:${hours}:${minutes}:${seconds}`;
        }
      }
      return [p + tt, e];
    }
    while(true){
      let a = getTimeTill();
      fetch("https://discord.com/api/v8/users/@me/settings", {
        "headers": {
          "authorization": window.discordAddons.auth[0],
          "content-type": "application/json",
          "x-super-properties": "eyJvcyI6Ik1hYyBPUyBYIiwiYnJvd3NlciI6IkRpc2NvcmQgQ2xpZW50IiwicmVsZWFzZV9jaGFubmVsIjoic3RhYmxlIiwiY2xpZW50X3ZlcnNpb24iOiIwLjAuMjYxIiwib3NfdmVyc2lvbiI6IjE3LjcuMCIsIm9zX2FyY2giOiJ4NjQiLCJzeXN0ZW1fbG9jYWxlIjoiZW4tVVMiLCJjbGllbnRfYnVpbGRfbnVtYmVyIjo3NTE0NCwiY2xpZW50X2V2ZW50X3NvdXJjZSI6bnVsbH0="
        },
        "body": "{\"custom_status\":{\"text\":\"" + a[0] + "\",\"emoji_name\":\"" + a[1] + "\"}}",
        "method": "PATCH",
        "mode": "cors",
        "credentials": "include"
      });
      await new Promise(r=>setTimeout(r,1000));
    }
  }catch(err) {
    console.log("%cDiscord Addons <Custom Status> | " + err, window.discordAddons.vars.console.error);
  }
})();
console.log("%cDiscord Addons | Loaded Custom Status", window.discordAddons.vars.console.success);

/* enabled experiments */
window.addEventListener("load", e => {
  try {
    const DI = window.DiscordInternals;
    const hasLib = !!(DI && DI.versionCompare && DI.versionCompare(DI.version || "", "1.9") >= 0);
        const WebpackModules = hasLib && DI.WebpackModules || (() => {

            const req = typeof(webpackJsonp) == "function" ? webpackJsonp([], {
                    '__extra_id__': (module, exports, req) => exports.default = req
            }, ['__extra_id__']).default : webpackJsonp.push([[], {
                    '__extra_id__': (module, exports, req) => module.exports = req
            }, [['__extra_id__']]]);
            delete req.m['__extra_id__'];
            delete req.c['__extra_id__'];
            const find = (filter, options = {}) => {
                const {cacheOnly = false} = options;
                for (let i in req.c) {
                    if (req.c.hasOwnProperty(i)) {
                        let m = req.c[i].exports;
                        if (m && m.__esModule && m.default && filter(m.default))
                            return m.default;
                        if (m && filter(m))
                            return m;
                    }
                }
                if (cacheOnly) {
                    console.warn('Cannot find loaded module in cache');
                    return null;
                }
                console.warn('Cannot find loaded module in cache. Loading all modules may have unexpected side effects');
                for (let i = 0; i < req.m.length; ++i) {
                    let m = req(i);
                    if (m && m.__esModule && m.default && filter(m.default))
                        return m.default;
                    if (m && filter(m))
                        return m;
                }
                console.warn('Cannot find module');
                return null;
            };
            const findByUniqueProperties = (propNames, options) => find(module => propNames.every(prop => module[prop] !== undefined), options);
            const findByDisplayName = (displayName, options) => find(module => module.displayName === displayName, options);
            return {find, findByUniqueProperties, findByDisplayName};
        })();
    t = WebpackModules.findByUniqueProperties(["isDeveloper"]);
    Object.defineProperty(t,"isDeveloper",{get:_=>1,set:_=>_,configurable:true});
    console.log("%cDiscord Addons | Loaded Experiments", window.discordAddons.vars.console.success);
  }catch(err) {
    console.log("%cDiscord Addons <Experiments> | " + err, window.discordAddons.vars.console.error);
  }
});
