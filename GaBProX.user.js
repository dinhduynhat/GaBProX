// ==UserScript==
2	// @name         GaBProX
3	// @description  GaBProX
4	// @version      0.1
5	// @author       mmasutti
6	// @match        http://agar.io
7	// @match        https://agar.io
8	// @require      https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.10.0/lodash.min.js
9	// @grant        GM_setValue
10	// @grant        GM_getValue
11	// @grant        GM_xmlhttpRequest
12	
13	// ==/UserScript==
14	i18n_lang = 'en';
15	i18n_dict = {
16	  'en': {
17	    'connecting': 'Connecting',
18	    'connect_help': 'If you cannot connect to the servers, check if you have some anti virus or firewall blocking the connection.',
19	    'play': 'Play',
20	    'spectate': 'Spectate',
21	    'login_and_play': 'Login and play',
22	    'play_as_guest': 'Play as guest',
23	    'share': 'Share',
24	    'advertisement': 'Advertisement',
25	    'privacy_policy': 'Privacy Policy',
26	    'terms_of_service': 'Terms of Service',
27	    'changelog': 'Changelog',
28	    'instructions_mouse': 'Move your mouse to control your cell',
29	    'instructions_space': 'Press <b>Space</b> to split',
30	    'instructions_w': 'Press <b>W</b> to eject some mass',
31	    'gamemode_ffa': 'FFA',
32	    'gamemode_teams': 'Teams',
33	    'gamemode_experimental': 'Experimental',
34	    'region_select': ' -- Select a Region -- ',
35	    'region_us_east': 'US East',
36	    'region_us_west': 'US West',
37	    'region_north_america': 'North America',
38	    'region_south_america': 'South America',
39	    'region_europe': 'Europe',
40	    'region_turkey': 'Turkey',
41	    'region_poland': 'Poland',
42	    'region_east_asia': 'East Asia',
43	    'region_russia': 'Russia',
44	    'region_china': 'China',
45	    'region_oceania': 'Oceania',
46	    'region_australia': 'Australia',
47	    'region_players': 'players',
48	    'option_no_skins': 'No skins',
49	    'option_no_names': 'No names',
50	    'option_dark_theme': 'Dark theme',
51	    'option_no_colors': 'No colors',
52	    'option_show_mass': 'Show mass',
53	    'leaderboard': 'Leaderboard',
54	    'unnamed_cell': 'An unnamed cell',
55	    'last_match_results': 'Last match results',
56	    'score': 'Score',
57	    'leaderboard_time': 'Leaderboard Time',
58	    'mass_eaten': 'Mass Eaten',
59	    'top_position': 'Top Position',
60	    'position_1': 'First',
61	    'position_2': 'Second',
62	    'position_3': 'Third',
63	    'position_4': 'Fourth',
64	    'position_5': 'Fifth',
65	    'position_6': 'Sixth',
66	    'position_7': 'Seventh',
67	    'position_8': 'Eighth',
68	    'position_9': 'Ninth',
69	    'position_10': 'Tenth',
70	    'player_cells_eaten': 'Player Cells Eaten',
71	    'survival_time': 'Survival Time',
72	    'games_played': 'Games played',
73	    'highest_mass': 'Highest mass',
74	    'total_cells_eaten': 'Total cells eaten',
75	    'total_mass_eaten': 'Total mass eaten',
76	    'longest_survival': 'Longest survival',
77	    'logout': 'Logout',
78	    'stats': 'Stats',
79	    'shop': 'Shop',
80	    'party': 'Party',
81	    'party_description': 'Play with your friends in the same map',
82	    'create_party': 'Create',
83	    'creating_party': 'Creating party...',
84	    'join_party': 'Join',
85	    'back_button': 'Back',
86	    'joining_party': 'Joining party...',
87	    'joined_party_instructions': 'You are now playing with this party:',
88	    'party_join_error': 'There was a problem joining that party, please make sure the code is correct, or try creating another party',
89	    'login_tooltip': 'Login with Facebook and get:<br\xA0/><br /><br />Start the game with more mass!<br />Level up to get even more starting mass!',
90	    'create_party_instructions': 'Give this link to your friends:',
91	    'join_party_instructions': 'Your friend should have given you a code, type it here:',
92	    'continue': 'Continue',
93	    'option_skip_stats': 'Skip stats',
94	    'stats_food_eaten': 'food eaten',
95	    'stats_highest_mass': 'highest mass',
96	    'stats_time_alive': 'time alive',
97	    'stats_leaderboard_time': 'leaderboard time',
98	    'stats_cells_eaten': 'cells eaten',
99	    'stats_top_position': 'top position',
100	    '': ''
101	  },
102	  '?': {}
103	};
104	i18n_lang = (window.navigator.userLanguage || window.navigator.language || 'en').split('-')[0];
105	if (!i18n_dict.hasOwnProperty(i18n_lang)) {
106	  i18n_lang = 'en';
107	}
108	i18n = i18n_dict[i18n_lang];
109	
110	jQuery("#canvas").remove();
111	jQuery("#connecting").after('<canvas id="canvas" width="800" height="600"></canvas>');
112	
113	(function(window, $) {
114	  function Init() {
115	    g_drawLines = true;
116	    PlayerStats();
117	    setInterval(PlayerStats, 180000);
118	    g_canvas = g_canvas_ = document.getElementById('canvas');
119	    g_context = g_canvas.getContext('2d');
120	    g_canvas.onmousedown = function(event) {
121	      if (g_touchCapable) {
122	        var deltaX = event.clientX - (5 + g_ready / 5 / 2);
123	        var deltaY = event.clientY - (5 + g_ready / 5 / 2);
124	        if (Math.sqrt(deltaX * deltaX + deltaY * deltaY) <= g_ready / 5 / 2) {
125	          SendPos();
126	          SendCmd(17);
127	          return;
128	        }
129	      }
130	      g_mouseX = 1 * event.clientX;
131	      g_mouseY = 1 * event.clientY;
132	      UpdatePos();
133	      SendPos();
134	    };
135	    g_canvas.onmousemove = function(event) {
136	      g_mouseX = 1 * event.clientX;
137	      g_mouseY = 1 * event.clientY;
138	      UpdatePos();
139	    };
140	    g_canvas.onmouseup = function() {};
141	    if (/firefox/i.test(navigator.userAgent)) {
142	      document.addEventListener('DOMMouseScroll', WheelHandler, false);
143	    } else {
144	      document.body.onmousewheel = WheelHandler;
145	    }
146	    var spaceDown = false;
147	    var cachedSkin = false;
148	    var wkeyDown = false;
149	    var gkeyDown = false;
150	    var ekeyDown = false;
151	
152	    function handleQuickFeed() {
153	      if (ekeyDown) {
154	        SendPos();
155	        SendCmd(21);            
156	        setTimeout(handleQuickFeed, 142);
157	      }
158	    }
159	      
160	    window.onkeydown = function(event) {
161	      if (!(32 != event.keyCode || spaceDown)) {
162	        SendPos();
163	        SendCmd(17);
164	        spaceDown = true;
165	      }
166	      if (!(81 != event.keyCode || cachedSkin)) {
167	        SendCmd(18);
168	        cachedSkin = true;
169	      }
170	      if (!(87 != event.keyCode || wkeyDown)) {
171	        SendPos();
172	        SendCmd(21);
173	        wkeyDown = true;
174	      }
175	      if (!(71 != event.keyCode || gkeyDown)) {
176	        showGrid = window.localStorage.showGrid = !showGrid;
177	        gkeyDown = true;
178	      }
179	      if (!(69 != event.keyCode || gkeyDown)) {
180	        ekeyDown = true;
181	        handleQuickFeed();
182	      }
183	      if (27 == event.keyCode) {
184	        __unmatched_10(300);
185	      }
186	    };
187	    window.onkeyup = function(event) {
188	      if (32 == event.keyCode) {
189	        spaceDown = false;
190	      }
191	      if (87 == event.keyCode) {
192	        wkeyDown = false;
193	      }
194	      if (71 == event.keyCode) {
195	        gkeyDown = false;
196	      }
197	      if (69 == event.keyCode) {
198	        ekeyDown = false;
199	      }
200	      if (81 == event.keyCode && cachedSkin) {
201	        SendCmd(19);
202	        cachedSkin = false;
203	      }
204	    };
205	    window.onblur = function() {
206	      SendCmd(19);
207	      wkeyDown = gkeyDown = ekeyDown = cachedSkin = spaceDown = false;
208	    };
209	    window.onresize = ResizeHandler;
210	    window.requestAnimationFrame(__unmatched_135);
211	    setInterval(SendPos, 40);
212	    if (g_region) {
213	      $('#region').val(g_region);
214	    }
215	    SyncRegion();
216	    SetRegion($('#region').val());
217	    if (0 == __unmatched_114 && g_region) {
218	      Start();
219	    }
220	    __unmatched_10(0);
221	    ResizeHandler();
222	    if (window.location.hash && 6 <= window.location.hash.length) {
223	      RenderLoop(window.location.hash);
224	    }
225	  }
226	  function WheelHandler(event) {
227	      g_zoom *= Math.pow(0.9, event.wheelDelta / -120 || event.detail || 0);
228	  }
229	  function UpdateTree() {
230	    if (0.4 > g_scale) {
231	      g_pointTree = null;
232	    } else {
233	      for (var minX = Number.POSITIVE_INFINITY, minY = Number.POSITIVE_INFINITY, maxY = Number.NEGATIVE_INFINITY, maxX = Number.NEGATIVE_INFINITY, i = 0; i < g_cells.length; i++) {
234	        var cell = g_cells[i];
235	        if (!(!cell.H() || cell.L || 20 >= cell.size * g_scale)) {
236	          minX = Math.min(cell.x - cell.size, minX);
237	          minY = Math.min(cell.y - cell.size, minY);
238	          maxY = Math.max(cell.x + cell.size, maxY);
239	          maxX = Math.max(cell.y + cell.size, maxX);
240	        }
241	      }
242	      g_pointTree = QTreeFactory.X({
243	        ba: minX - 10,
244	        ca: minY - 10,
245	        Z: maxY + 10,
246	        $: maxX + 10,
247	        fa: 2,
248	        ha: 4
249	      });
250	      for (i = 0; i < g_cells.length; i++) {
251	        if (cell = g_cells[i], cell.H() && !(20 >= cell.size * g_scale)) {
252	          for (minX = 0; minX < cell.a.length; ++minX) {
253	            minY = cell.a[minX].x;
254	            maxY = cell.a[minX].y;
255	            if (!(minY < g_viewX - g_ready / 2 / g_scale || maxY < g_viewY - noClip / 2 / g_scale || minY > g_viewX + g_ready / 2 / g_scale || maxY > g_viewY + noClip / 2 / g_scale)) {
256	              g_pointTree.Y(cell.a[minX]);
257	            }
258	          }
259	        }
260	      }
261	    }
262	  }
263	  function UpdatePos() {
264	    g_moveX = (g_mouseX - g_ready / 2) / g_scale + g_viewX;
265	    g_moveY = (g_mouseY - noClip / 2) / g_scale + g_viewY;
266	  }
267	  function PlayerStats() {
268	    if (null == g_regionLabels) {
269	      g_regionLabels = {};
270	      $('#region').children().each(function() {
271	        var $this = $(this);
272	        var val = $this.val();
273	        if (val) {
274	          g_regionLabels[val] = $this.text();
275	        }
276	      });
277	    }
278	    $.get(g_protocol + 'info', function(data) {
279	      var regionNumPlayers = {};
280	      var region;
281	      for (region in data.regions) {
282	        var region_ = region.split(':')[0];
283	        regionNumPlayers[region_] = regionNumPlayers[region_] || 0;
284	        regionNumPlayers[region_] += data.regions[region].numPlayers;
285	      }
286	      for (region in regionNumPlayers) {
287	        $('#region option[value="' + region + '"]').text(g_regionLabels[region] + ' (' + regionNumPlayers[region] + ' players)');
288	      }
289	    }, 'json');
290	  }
291	  function HideOverlay() {
292	    $('#adsBottom').hide();
293	    $('#overlays').hide();
294	    $('#stats').hide();
295	    $('#mainPanel').hide();
296	    __unmatched_147 = g_playerCellDestroyed = false;
297	    SyncRegion();
298	    __unmatched_14(window.aa.concat(window.ac));
299	  }
300	  function SetRegion(val) {
301	    if (val && val != g_region) {
302	      if ($('#region').val() != val) {
303	        $('#region').val(val);
304	      }
305	      g_region = window.localStorage.location = val;
306	      $('.region-message').hide();
307	      $('.region-message.' + val).show();
308	      $('.btn-needs-server').prop('disabled', false);
309	      if (g_drawLines) {
310	        Start();
311	      }
312	    }
313	  }
314	  function __unmatched_10(char) {
315	    if (!(g_playerCellDestroyed || __unmatched_147)) {
316	      g_nick = null;
317	      if (!__unmatched_122) {
318	        $('#adsBottom').show();
319	        $('#g300x250').hide();
320	        $('#a300x250').show();
321	      }
322	      __unmatched_13(__unmatched_122 ? window.ac : window.aa);
323	      __unmatched_122 = false;
324	      if (1000 > char) {
325	        qkeyDown = 1;
326	      }
327	      g_playerCellDestroyed = true;
328	      $('#mainPanel').show();
329	      if (0 < char) {
330	        $('#overlays').fadeIn(char);
331	      } else {
332	        $('#overlays').show();
333	      }
334	    }
335	  }
336	  function n(rect) {
337	    $('#helloContainer').attr('data-gamemode', rect);
338	    __unmatched_97 = rect;
339	    $('#gamemode').val(rect);
340	  }
341	  function SyncRegion() {
342	    if ($('#region').val()) {
343	      window.localStorage.location = $('#region').val();
344	    } else if (window.localStorage.location) {
345	      $('#region').val(window.localStorage.location);
346	    }
347	    if ($('#region').val()) {
348	      $('#locationKnown').append($('#region'));
349	    } else {
350	      $('#locationUnknown').append($('#region'));
351	    }
352	  }
353	  function __unmatched_13(__unmatched_180) {
354	    if (window.googletag) {
355	      window.googletag.cmd.push(function() {
356	        if (g_canRefreshAds) {
357	          g_canRefreshAds = false;
358	          setTimeout(function() {
359	            g_canRefreshAds = true;
360	          }, 60000 * g_refreshAdsCooldown);
361	          if (window.googletag && window.googletag.pubads && window.googletag.pubads().refresh) {
362	            window.googletag.pubads().refresh(__unmatched_180);
363	          }
364	        }
365	      });
366	    }
367	  }
368	  function __unmatched_14(__unmatched_181) {
369	    if (window.googletag && window.googletag.pubads && window.googletag.pubads().clear) {
370	      window.googletag.pubads().clear(__unmatched_181);
371	    }
372	  }
373	  function Render(i) {
374	    return window.i18n[i] || window.i18n_dict.en[i] || i;
375	  }
376	  function FindGame() {
377	    var __unmatched_183 = ++__unmatched_114;
378	    console.log('Find ' + g_region + __unmatched_97);
379	    $.ajax(g_protocol + 'findServer', {
380	      error: function() {
381	        setTimeout(FindGame, 1000);
382	      },
383	      success: function(point) {
384	        if (__unmatched_183 == __unmatched_114) {
385	          if (point.alert) {
386	            alert(point.alert);
387	          }
388	          Connect('ws://' + point.ip, point.token);
389	        }
390	      },
391	      dataType: 'json',
392	      method: 'POST',
393	      cache: false,
394	      crossDomain: true,
395	      data: (g_region + __unmatched_97 || '?') + '\n154669603'
396	    });
397	  }
398	  function Start() {
399	    if (g_drawLines && g_region) {
400	      $('#connecting').show();
401	      FindGame();
402	    }
403	  }
404	  function Connect(address, ticket) {
405	    if (g_socket) {
406	      g_socket.onopen = null;
407	      g_socket.onmessage = null;
408	      g_socket.onclose = null;
409	      try {
410	        g_socket.close();
411	      } catch (exception) {}
412	      g_socket = null;
413	    }
414	    if (__unmatched_116.ip) {
415	      address = 'ws://' + __unmatched_116.ip;
416	    }
417	    if (null != __unmatched_126) {
418	      var __unmatched_187 = __unmatched_126;
419	      __unmatched_126 = function() {
420	        __unmatched_187(ticket);
421	      };
422	    }
423	    if (g_secure) {
424	      var parts = address.split(':');
425	      address = parts[0] + 's://ip-' + parts[1].replace(/\./g, '-').replace(/\//g, '') + '.tech.agar.io:' + +parts[2];
426	    }
427	    g_playerCellIds = [];
428	    g_playerCells = [];
429	    g_cellsById = {};
430	    g_cells = [];
431	    g_destroyedCells = [];
432	    g_scoreEntries = [];
433	    g_leaderboardCanvas = g_scorePartitions = null;
434	    g_maxScore = 0;
435	    g_connectSuccessful = false;
436	    console.log('Connecting to ' + address);
437	    g_socket = new WebSocket(address);
438	    g_socket.binaryType = 'arraybuffer';
439	    g_socket.onopen = function() {
440	      var data;
441	      console.log('socket open');
442	      data = GetBuffer(5);
443	      data.setUint8(0, 254);
444	      data.setUint32(1, 5, true);
445	      SendBuffer(data);
446	      data = GetBuffer(5);
447	      data.setUint8(0, 255);
448	      data.setUint32(1, 154669603, true);
449	      SendBuffer(data);
450	      data = GetBuffer(1 + ticket.length);
451	      data.setUint8(0, 80);
452	      for (var i = 0; i < ticket.length; ++i) {
453	        data.setUint8(i + 1, ticket.charCodeAt(i));
454	      }
455	      SendBuffer(data);
456	      RefreshAds();
457	    };
458	    g_socket.onmessage = MessageHandler;
459	    g_socket.onclose = CloseHandler;
460	    g_socket.onerror = function() {
461	      console.log('socket error');
462	    };
463	  }
464	  function GetBuffer(size) {
465	    return new DataView(new ArrayBuffer(size));
466	  }
467	  function SendBuffer(data) {
468	    g_socket.send(data.buffer);
469	  }
470	  function CloseHandler() {
471	    if (g_connectSuccessful) {
472	      g_retryTimeout = 500;
473	    }
474	    console.log('socket close');
475	    setTimeout(Start, g_retryTimeout);
476	    g_retryTimeout *= 2;
477	  }
478	  function MessageHandler(data) {
479	    Receive(new DataView(data.data));
480	  }
481	  function Receive(data) {
482	    function __unmatched_196() {
483	      for (var string = '';;) {
484	        var char = data.getUint16(pos, true);
485	        pos += 2;
486	        if (0 == char) {
487	          break;
488	        }
489	        string += String.fromCharCode(char);
490	      }
491	      return string;
492	    }
493	    var pos = 0;
494	    if (240 == data.getUint8(pos)) {
495	      pos += 5;
496	    }
497	    switch (data.getUint8(pos++)) {
498	      case 16:
499	        ParseCellUpdates(data, pos);
500	        break;
501	      case 17:
502	        g_viewX_ = data.getFloat32(pos, true);
503	        pos += 4;
504	        g_viewY_ = data.getFloat32(pos, true);
505	        pos += 4;
506	        g_scale_ = data.getFloat32(pos, true);
507	        pos += 4;
508	        break;
509	      case 20:
510	        g_playerCells = [];
511	        g_playerCellIds = [];
512	        break;
513	      case 21:
514	        g_linesY_ = data.getInt16(pos, true);
515	        pos += 2;
516	        g_linesX_ = data.getInt16(pos, true);
517	        pos += 2;
518	        if (!__unmatched_100) {
519	          __unmatched_100 = true;
520	          g_linesX = g_linesY_;
521	          g_linesY = g_linesX_;
522	        }
523	        break;
524	      case 32:
525	        g_playerCellIds.push(data.getUint32(pos, true));
526	        pos += 4;
527	        break;
528	      case 49:
529	        if (null != g_scorePartitions) {
530	          break;
531	        }
532	        var num = data.getUint32(pos, true);
533	        var pos = pos + 4;
534	        g_scoreEntries = [];
535	        for (var i = 0; i < num; ++i) {
536	          var id = data.getUint32(pos, true);
537	          var pos = pos + 4;
538	          g_scoreEntries.push({
539	            id: id,
540	            name: __unmatched_196()
541	          });
542	        }
543	        UpdateLeaderboard();
544	        break;
545	      case 50:
546	        g_scorePartitions = [];
547	        num = data.getUint32(pos, true);
548	        pos += 4;
549	        for (i = 0; i < num; ++i) {
550	          g_scorePartitions.push(data.getFloat32(pos, true));
551	          pos += 4;
552	        }
553	        UpdateLeaderboard();
554	        break;
555	      case 64:
556	        g_minX = data.getFloat64(pos, true);
557	        pos += 8;
558	        g_minY = data.getFloat64(pos, true);
559	        pos += 8;
560	        g_maxX = data.getFloat64(pos, true);
561	        pos += 8;
562	        g_maxY = data.getFloat64(pos, true);
563	        pos += 8;
564	        g_viewX_ = (g_maxX + g_minX) / 2;
565	        g_viewY_ = (g_maxY + g_minY) / 2;
566	        g_scale_ = 1;
567	        if (0 == g_playerCells.length) {
568	          g_viewX = g_viewX_;
569	          g_viewY = g_viewY_;
570	          g_scale = g_scale_;
571	        }
572	        break;
573	      case 81:
574	        var x = data.getUint32(pos, true);
575	        var pos = pos + 4;
576	        var __unmatched_202 = data.getUint32(pos, true);
577	        var pos = pos + 4;
578	        var __unmatched_203 = data.getUint32(pos, true);
579	        var pos = pos + 4;
580	        setTimeout(function() {
581	          __unmatched_44({
582	            d: x,
583	            e: __unmatched_202,
584	            c: __unmatched_203
585	          });
586	        }, 1200);
587	    }
588	  }
589	  function ParseCellUpdates(data, pos) {
590	    function __unmatched_208() {
591	      for (var string = '';;) {
592	        var id = data.getUint16(pos, true);
593	        pos += 2;
594	        if (0 == id) {
595	          break;
596	        }
597	        string += String.fromCharCode(id);
598	      }
599	      return string;
600	    }
601	    function __unmatched_209() {
602	      for (var __unmatched_224 = '';;) {
603	        var r = data.getUint8(pos++);
604	        if (0 == r) {
605	          break;
606	        }
607	        __unmatched_224 += String.fromCharCode(r);
608	      }
609	      return __unmatched_224;
610	    }
611	    __unmatched_109 = g_time = Date.now();
612	    if (!g_connectSuccessful) {
613	      g_connectSuccessful = true;
614	      __unmatched_25();
615	    }
616	    __unmatched_90 = false;
617	    var num = data.getUint16(pos, true);
618	    pos += 2;
619	    for (var i = 0; i < num; ++i) {
620	      var cellA = g_cellsById[data.getUint32(pos, true)];
621	      var cellB = g_cellsById[data.getUint32(pos + 4, true)];
622	      pos += 8;
623	      if (cellA && cellB) {
624	        cellB.R();
625	        cellB.o = cellB.x;
626	        cellB.p = cellB.y;
627	        cellB.n = cellB.size;
628	        cellB.C = cellA.x;
629	        cellB.D = cellA.y;
630	        cellB.m = cellB.size;
631	        cellB.K = g_time;
632	        __unmatched_50(cellA, cellB);
633	      }
634	    }
635	    for (i = 0;;) {
636	      num = data.getUint32(pos, true);
637	      pos += 4;
638	      if (0 == num) {
639	        break;
640	      }
641	      ++i;
642	      var size;
643	      var cellA = data.getInt32(pos, true);
644	      pos += 4;
645	      cellB = data.getInt32(pos, true);
646	      pos += 4;
647	      size = data.getInt16(pos, true);
648	      pos += 2;
649	      var flags = data.getUint8(pos++);
650	      var y = data.getUint8(pos++);
651	      var b = data.getUint8(pos++);
652	      var y = __unmatched_41(flags << 16 | y << 8 | b);
653	      var b = data.getUint8(pos++);
654	      var isVirus = !!(b & 1);
655	      var isAgitated = !!(b & 16);
656	      var __unmatched_220 = null;
657	      if (b & 2) {
658	        pos += 4 + data.getUint32(pos, true);
659	      }
660	      if (b & 4) {
661	        __unmatched_220 = __unmatched_209();
662	      }
663	      var name = __unmatched_208();
664	      var flags = null;
665	      if (g_cellsById.hasOwnProperty(num)) {
666	        flags = g_cellsById[num];
667	        flags.J();
668	        flags.o = flags.x;
669	        flags.p = flags.y;
670	        flags.n = flags.size;
671	        flags.color = y;
672	      } else {
673	        flags = new Cell(num, cellA, cellB, size, y, name);
674	        g_cells.push(flags);
675	        g_cellsById[num] = flags;
676	        flags.ia = cellA;
677	        flags.ja = cellB;
678	      }
679	      flags.f = isVirus;
680	      flags.j = isAgitated;
681	      flags.C = cellA;
682	      flags.D = cellB;
683	      flags.m = size;
684	      flags.K = g_time;
685	      flags.T = b;
686	      if (__unmatched_220) {
687	        flags.V = __unmatched_220;
688	      }
689	      if (name) {
690	        flags.t(name);
691	      }
692	      if (-1 != g_playerCellIds.indexOf(num) && -1 == g_playerCells.indexOf(flags)) {
693	        g_playerCells.push(flags);
694	        if (1 == g_playerCells.length) {
695	          g_viewX = flags.x;
696	          g_viewY = flags.y;
697	          __unmatched_141();
698	          document.getElementById('overlays').style.display = 'none';
699	          points = [];
700	          __unmatched_145 = 0;
701	          __unmatched_146 = g_playerCells[0].color;
702	          __unmatched_148 = true;
703	          __unmatched_149 = Date.now();
704	          g_mode = __unmatched_152 = __unmatched_151 = 0;
705	        }
706	      }
707	    }
708	    cellA = data.getUint32(pos, true);
709	    pos += 4;
710	    for (i = 0; i < cellA; i++) {
711	      num = data.getUint32(pos, true);
712	      pos += 4;
713	      flags = g_cellsById[num];
714	      if (null != flags) {
715	        flags.R();
716	      }
717	    }
718	    if (__unmatched_90 && 0 == g_playerCells.length) {
719	      __unmatched_150 = Date.now();
720	      __unmatched_148 = false;
721	      if (!(g_playerCellDestroyed || __unmatched_147)) {
722	        if (__unmatched_154) {
723	          __unmatched_13(window.ab);
724	          ShowOverlay();
725	          __unmatched_147 = true;
726	          $('#overlays').fadeIn(3000);
727	          $('#stats').show();
728	        } else {
729	          __unmatched_10(3000);
730	        }
731	      }
732	    }
733	  }
734	  function __unmatched_25() {
735	    $('#connecting').hide();
736	    SendNick();
737	    if (__unmatched_126) {
738	      __unmatched_126();
739	      __unmatched_126 = null;
740	    }
741	    if (null != __unmatched_128) {
742	      clearTimeout(__unmatched_128);
743	    }
744	    __unmatched_128 = setTimeout(function() {
745	      if (window.ga) {
746	        ++__unmatched_129;
747	        window.ga('set', 'dimension2', __unmatched_129);
748	      }
749	    }, 10000);
750	  }
751	  function SendPos() {
752	    if (IsConnected()) {
753	      var deltaY = g_mouseX - g_ready / 2;
754	      var delta = g_mouseY - noClip / 2;
755	      if (!(64 > deltaY * deltaY + delta * delta || 0.01 > Math.abs(g_lastMoveY - g_moveX) && 0.01 > Math.abs(g_lastMoveX - g_moveY))) {
756	        g_lastMoveY = g_moveX;
757	        g_lastMoveX = g_moveY;
758	        deltaY = GetBuffer(13);
759	        deltaY.setUint8(0, 16);
760	        deltaY.setInt32(1, g_moveX, true);
761	        deltaY.setInt32(5, g_moveY, true);
762	        deltaY.setUint32(9, 0, true);
763	        SendBuffer(deltaY);
764	      }
765	    }
766	  }
767	  function SendNick() {
768	    if (IsConnected() && g_connectSuccessful && null != g_nick) {
769	      var data = GetBuffer(1 + 2 * g_nick.length);
770	      data.setUint8(0, 0);
771	      for (var i = 0; i < g_nick.length; ++i) {
772	        data.setUint16(1 + 2 * i, g_nick.charCodeAt(i), true);
773	      }
774	      SendBuffer(data);
775	      g_nick = null;
776	    }
777	  }
778	  function IsConnected() {
779	    return null != g_socket && g_socket.readyState == g_socket.OPEN;
780	  }
781	  function SendCmd(cmd) {
782	    if (IsConnected()) {
783	      var data = GetBuffer(1);
784	      data.setUint8(0, cmd);
785	      SendBuffer(data);
786	    }
787	  }
788	  function RefreshAds() {
789	    if (IsConnected() && null != __unmatched_110) {
790	      var __unmatched_232 = GetBuffer(1 + __unmatched_110.length);
791	      __unmatched_232.setUint8(0, 81);
792	      for (var y = 0; y < __unmatched_110.length; ++y) {
793	        __unmatched_232.setUint8(y + 1, __unmatched_110.charCodeAt(y));
794	      }
795	      SendBuffer(__unmatched_232);
796	    }
797	  }
798	  function ResizeHandler() {
799	    g_ready = 1 * window.innerWidth;
800	    noClip = 1 * window.innerHeight;
801	    g_canvas_.width = g_canvas.width = g_ready;
802	    g_canvas_.height = g_canvas.height = noClip;
803	    var $dialog = $('#helloContainer');
804	    $dialog.css('transform', 'none');
805	    var dialogHeight = $dialog.height();
806	    var height = window.innerHeight;
807	    if (dialogHeight > height / 1.1) {
808	      $dialog.css('transform', 'translate(-50%, -50%) scale(' + height / dialogHeight / 1.1 + ')');
809	    } else {
810	      $dialog.css('transform', 'translate(-50%, -50%)');
811	    }
812	    GetScore();
813	  }
814	  function ScaleModifier() {
815	    var scale;
816	    scale = 1 * Math.max(noClip / 1080, g_ready / 1920);
817	    return scale *= g_zoom;
818	  }
819	  function __unmatched_33() {
820	    if (0 != g_playerCells.length) {
821	      for (var scale = 0, i = 0; i < g_playerCells.length; i++) {
822	        scale += g_playerCells[i].size;
823	      }
824	      scale = Math.pow(Math.min(64 / scale, 1), 0.4) * ScaleModifier();
825	      g_scale = (9 * g_scale + scale) / 10;
826	    }
827	  }
828	    
829	    var showGrid = window.localStorage.showGrid || false;
830	    
831	    function renderBackground(context, x1, x0, y1, y0) {
832	        var letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
833	        var gridWidth = 5;
834	        var gridHeight = 7;
835	
836	        var xMax = Math.round(x1);
837	        var xMin = Math.round(x0);
838	        var yMax = Math.round(y1);
839	        var yMin = Math.round(y0);
840	
841	        var xLength = xMax - xMin;
842	        var yLength = yMax - yMin;
843	
844	        context.save();
845	
846	        if (showGrid) {
847	            var xPart = xLength / gridWidth;
848	            var yPart = yLength / gridHeight;
849	
850	            context.beginPath();
851	            context.lineWidth = 20;
852	            context.textAlign = 'center';
853	            context.textBaseline = 'middle';
854	            context.font = (0.6 * xPart) + 'px Ubuntu';
855	            
856	            context.fillStyle = g_showMass ? '#1A1A1A' : '#e5e5e5';
857	
858	            for (var j = 0; j < gridHeight; j++) {
859	                for (var i = 0; i < gridWidth; i++) {
860	                    context.fillText(letters[j] + (i + 1), (xMin + xPart * i) + (xPart / 2), (yMin + yPart * j) + (yPart / 2));
861	                }
862	            }
863	
864	            context.lineWidth = 160;
865	            context.strokeStyle = g_showMass ? '#1A1A1A' : '#e5e5e5';
866	
867	            for (var j = 0; j < gridHeight; j++) {
868	                for (var i = 0; i < gridWidth; i++) {
869	                    context.strokeRect(xMin + xPart * i, yMin + yPart * j, xPart, yPart);
870	                }
871	            }
872	
873	            context.stroke();
874	        }
875	
876	        context.beginPath();
877	        context.strokeStyle = "#F44336";
878	        context.lineWidth = 90;
879	        context.strokeRect(x0 - 90, y0 - 90, xLength + 180, yLength + 180);
880	        context.restore();
881	    }    
882	    
883	  function GetScore() {
884	    var x;
885	    var time = Date.now();
886	    ++__unmatched_77;
887	    g_time = time;
888	    if (0 < g_playerCells.length) {
889	      __unmatched_33();
890	      for (var y = x = 0, i = 0; i < g_playerCells.length; i++) {
891	        g_playerCells[i].J();
892	        x += g_playerCells[i].x / g_playerCells.length;
893	        y += g_playerCells[i].y / g_playerCells.length;
894	      }
895	      g_viewX_ = x;
896	      g_viewY_ = y;
897	      g_scale_ = g_scale;
898	      g_viewX = (g_viewX + x) / 2;
899	      g_viewY = (g_viewY + y) / 2;
900	    } else {
901	      g_viewX = (29 * g_viewX + g_viewX_) / 30;
902	      g_viewY = (29 * g_viewY + g_viewY_) / 30;
903	      g_scale = (9 * g_scale + g_scale_ * ScaleModifier()) / 10;
904	    }
905	    UpdateTree();
906	    UpdatePos();
907	    if (!g_showTrails) {
908	      g_context.clearRect(0, 0, g_ready, noClip);
909	    }
910	    if (g_showTrails) {
911	      g_context.fillStyle = g_showMass ? '#111111' : '#F2FBFF';
912	      g_context.globalAlpha = 0.05;
913	      g_context.fillRect(0, 0, g_ready, noClip);
914	      g_context.globalAlpha = 1;
915	    } else {
916	        if (showGrid) {
917	          g_context.fillStyle = g_showMass ? '#000000' : '#F2FBFF';
918	          g_context.fillRect(0, 0, g_ready, noClip);
919	        } else {
920	          DrawGrid();
921	        }
922	    }
923	    g_cells.sort(function(A, B) {
924	      return A.size == B.size ? A.id - B.id : A.size - B.size;
925	    });
926	    g_context.save();
927	    g_context.translate(g_ready / 2, noClip / 2);
928	    g_context.scale(g_scale, g_scale);
929	    g_context.translate(-g_viewX, -g_viewY);
930	      
931	    renderBackground(g_context, g_maxX, g_minX, g_maxY, g_minY);
932	      
933	    for (i = 0; i < g_destroyedCells.length; i++) {
934	      g_destroyedCells[i].s(g_context);
935	    }
936	    for (i = 0; i < g_cells.length; i++) {
937	      g_cells[i].s(g_context);
938	    }
939	    if (__unmatched_100) {
940	      g_linesX = (3 * g_linesX + g_linesY_) / 4;
941	      g_linesY = (3 * g_linesY + g_linesX_) / 4;
942	      g_context.save();
943	      g_context.strokeStyle = '#FFAAAA';
944	      g_context.lineWidth = 10;
945	      g_context.lineCap = 'round';
946	      g_context.lineJoin = 'round';
947	      g_context.globalAlpha = 0.5;
948	      g_context.beginPath();
949	      for (i = 0; i < g_playerCells.length; i++) {
950	        g_context.moveTo(g_playerCells[i].x, g_playerCells[i].y);
951	        g_context.lineTo(g_linesX, g_linesY);
952	      }
953	      g_context.stroke();
954	      g_context.restore();
955	    }
956	    g_context.restore();
957	    if (g_leaderboardCanvas && g_leaderboardCanvas.width) {
958	      g_context.drawImage(g_leaderboardCanvas, g_ready - g_leaderboardCanvas.width - 10, 10);
959	    }
960	    g_maxScore = Math.max(g_maxScore, __unmatched_37());
961	    if (0 != g_maxScore) {
962	      if (null == g_cachedScore) {
963	        g_cachedScore = new CachedCanvas(24, '#FFFFFF');
964	      }
965	      g_cachedScore.u(Render('score') + ': ' + ~~(g_maxScore / 100));
966	      y = g_cachedScore.F();
967	      x = y.width;
968	      g_context.globalAlpha = 0.2;
969	      g_context.fillStyle = '#000000';
970	      g_context.fillRect(10, noClip - 10 - 24 - 10, x + 10, 34);
971	      g_context.globalAlpha = 1;
972	      g_context.drawImage(y, 15, noClip - 10 - 24 - 5);
973	    }
974	    DrawSplitImage();
975	    time = Date.now() - time;
976	    if (time > 1000 / 60) {
977	      g_pointNumScale -= 0.01;
978	    } else if (time < 1000 / 65) {
979	      g_pointNumScale += 0.01;
980	    }
981	    if (0.4 > g_pointNumScale) {
982	      g_pointNumScale = 0.4;
983	    }
984	    if (1 < g_pointNumScale) {
985	      g_pointNumScale = 1;
986	    }
987	    time = g_time - __unmatched_79;
988	    if (!IsConnected() || g_playerCellDestroyed || __unmatched_147) {
989	      qkeyDown += time / 2000;
990	      if (1 < qkeyDown) {
991	        qkeyDown = 1;
992	      }
993	    } else {
994	      qkeyDown -= time / 300;
995	      if (0 > qkeyDown) {
996	        qkeyDown = 0;
997	      }
998	    }
999	    if (0 < qkeyDown) {
1000	      g_context.fillStyle = '#000000';
1001	      if (__unmatched_115) {
1002	        g_context.globalAlpha = qkeyDown;
1003	        g_context.fillRect(0, 0, g_ready, noClip);
1004	        if (canvas.complete && canvas.width) {
1005	          if (canvas.width / canvas.height < g_ready / noClip) {
1006	            time = g_ready;
1007	            x = canvas.height * g_ready / canvas.width;
1008	          } else {
1009	            time = canvas.width * noClip / canvas.height;
1010	            x = noClip;
1011	          }
1012	          g_context.drawImage(canvas, (g_ready - time) / 2, (noClip - x) / 2, time, x);
1013	          g_context.globalAlpha = 0.5 * qkeyDown;
1014	          g_context.fillRect(0, 0, g_ready, noClip);
1015	        }
1016	      } else {
1017	        g_context.globalAlpha = 0.5 * qkeyDown;
1018	        g_context.fillRect(0, 0, g_ready, noClip);
1019	      }
1020	      g_context.globalAlpha = 1;
1021	    } else {
1022	      __unmatched_115 = false;
1023	    }
1024	    __unmatched_79 = g_time;
1025	  }
1026	  function DrawGrid() {
1027	    g_context.fillStyle = g_showMass ? '#111111' : '#F2FBFF';
1028	    g_context.fillRect(0, 0, g_ready, noClip);
1029	    g_context.save();
1030	    g_context.strokeStyle = g_showMass ? '#AAAAAA' : '#000000';
1031	    g_context.globalAlpha = 0.2 * g_scale;
1032	    for (var width = g_ready / g_scale, height = noClip / g_scale, g_width = (-g_viewX + width / 2) % 50; g_width < width; g_width += 50) {
1033	      g_context.beginPath();
1034	      g_context.moveTo(g_width * g_scale - 0.5, 0);
1035	      g_context.lineTo(g_width * g_scale - 0.5, height * g_scale);
1036	      g_context.stroke();
1037	    }
1038	    for (g_width = (-g_viewY + height / 2) % 50; g_width < height; g_width += 50) {
1039	      g_context.beginPath();
1040	      g_context.moveTo(0, g_width * g_scale - 0.5);
1041	      g_context.lineTo(width * g_scale, g_width * g_scale - 0.5);
1042	      g_context.stroke();
1043	    }
1044	    g_context.restore();
1045	  }
1046	  function DrawSplitImage() {
1047	    if (g_touchCapable && g_splitImage.width) {
1048	      var size = g_ready / 5;
1049	      g_context.drawImage(g_splitImage, 5, 5, size, size);
1050	    }
1051	  }
1052	  function __unmatched_37() {
1053	    for (var score = 0, i = 0; i < g_playerCells.length; i++) {
1054	      score += g_playerCells[i].m * g_playerCells[i].m;
1055	    }
1056	    return score;
1057	  }
1058	  function UpdateLeaderboard() {
1059	    g_leaderboardCanvas = null;
1060	    if (null != g_scorePartitions || 0 != g_scoreEntries.length) {
1061	      if (null != g_scorePartitions || g_showNames) {
1062	        g_leaderboardCanvas = document.createElement('canvas');
1063	        var context = g_leaderboardCanvas.getContext('2d');
1064	        var height = 60;
1065	        var height = null == g_scorePartitions ? height + 24 * g_scoreEntries.length : height + 180;
1066	        var scale = Math.min(200, 0.3 * g_ready) / 200;
1067	        g_leaderboardCanvas.width = 200 * scale;
1068	        g_leaderboardCanvas.height = height * scale;
1069	        context.scale(scale, scale);
1070	        context.globalAlpha = 0.4;
1071	        context.fillStyle = '#000000';
1072	        context.fillRect(0, 0, 200, height);
1073	        context.globalAlpha = 1;
1074	        context.fillStyle = '#FFFFFF';
1075	        scale = null;
1076	        scale = Render('leaderboard');
1077	        context.font = '30px Ubuntu';
1078	        context.fillText(scale, 100 - context.measureText(scale).width / 2, 40);
1079	        if (null == g_scorePartitions) {
1080	          for (context.font = '20px Ubuntu', height = 0; height < g_scoreEntries.length; ++height) {
1081	            scale = g_scoreEntries[height].name || Render('unnamed_cell');
1082	            if (!g_showNames) {
1083	              scale = Render('unnamed_cell');
1084	            }
1085	            if (-1 != g_playerCellIds.indexOf(g_scoreEntries[height].id)) {
1086	              if (g_playerCells[0].name) {
1087	                scale = g_playerCells[0].name;
1088	              }
1089	              context.fillStyle = '#FFAAAA';
1090	            } else {
1091	              context.fillStyle = '#FFFFFF';
1092	            }
1093	            scale = height + 1 + '. ' + scale;
1094	            context.fillText(scale, 100 - context.measureText(scale).width / 2, 70 + 24 * height);
1095	          }
1096	        } else {
1097	          for (height = scale = 0; height < g_scorePartitions.length; ++height) {
1098	            var end = scale + g_scorePartitions[height] * Math.PI * 2;
1099	            context.fillStyle = g_teamColors[height + 1];
1100	            context.beginPath();
1101	            context.moveTo(100, 140);
1102	            context.arc(100, 140, 80, scale, end, false);
1103	            context.fill();
1104	            scale = end;
1105	          }
1106	        }
1107	      }
1108	    }
1109	  }
1110	  function Node(left, top, width, height, depth) {
1111	    this.P = left;
1112	    this.x = top;
1113	    this.y = width;
1114	    this.g = height;
1115	    this.b = depth;
1116	  }
1117	  function Cell(id, x, y, size, color, name) {
1118	    this.id = id;
1119	    this.o = this.x = x;
1120	    this.p = this.y = y;
1121	    this.n = this.size = size;
1122	    this.color = color;
1123	    this.a = [];
1124	    this.Q();
1125	    this.t(name);
1126	  }
1127	  function __unmatched_41(__unmatched_267) {
1128	    for (__unmatched_267 = __unmatched_267.toString(16); 6 > __unmatched_267.length;) {
1129	      __unmatched_267 = '0' + __unmatched_267;
1130	    }
1131	    return '#' + __unmatched_267;
1132	  }
1133	  function CachedCanvas(size, color, stroke, strokeColor) {
1134	    if (size) {
1135	      this.q = size;
1136	    }
1137	    if (color) {
1138	      this.M = color;
1139	    }
1140	    this.O = !!stroke;
1141	    if (strokeColor) {
1142	      this.r = strokeColor;
1143	    }
1144	  }
1145	  function __unmatched_43(params) {
1146	    for (var size_ = params.length, __unmatched_274, __unmatched_275; 0 < size_;) {
1147	      __unmatched_275 = Math.floor(Math.random() * size_);
1148	      size_--;
1149	      __unmatched_274 = params[size_];
1150	      params[size_] = params[__unmatched_275];
1151	      params[__unmatched_275] = __unmatched_274;
1152	    }
1153	  }
1154	  function __unmatched_44(rect, callback) {
1155	    var __unmatched_278 = '1' == $('#helloContainer').attr('data-has-account-data');
1156	    $('#helloContainer').attr('data-has-account-data', '1');
1157	    if (null == callback && window.localStorage[i_]) {
1158	      var rand = JSON.parse(window.localStorage[i_]);
1159	      rand.xp = rect.e;
1160	      rand.xpNeeded = rect.c;
1161	      rand.level = rect.d;
1162	      window.localStorage[i_] = JSON.stringify(rand);
1163	    }
1164	    if (__unmatched_278) {
1165	      var width = +$('.agario-exp-bar .progress-bar-text').first().text().split('/')[0];
1166	      var __unmatched_278 = +$('.agario-exp-bar .progress-bar-text').first().text().split('/')[1].split(' ')[0];
1167	      var rand = $('.agario-profile-panel .progress-bar-star').first().text();
1168	      if (rand != rect.d) {
1169	        __unmatched_44({
1170	          e: __unmatched_278,
1171	          c: __unmatched_278,
1172	          d: rand
1173	        }, function() {
1174	          $('.agario-profile-panel .progress-bar-star').text(rect.d);
1175	          $('.agario-exp-bar .progress-bar').css('width', '100%');
1176	          $('.progress-bar-star').addClass('animated tada').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function() {
1177	            $('.progress-bar-star').removeClass('animated tada');
1178	          });
1179	          setTimeout(function() {
1180	            $('.agario-exp-bar .progress-bar-text').text(rect.c + '/' + rect.c + ' XP');
1181	            __unmatched_44({
1182	              e: 0,
1183	              c: rect.c,
1184	              d: rect.d
1185	            }, function() {
1186	              __unmatched_44(rect, callback);
1187	            });
1188	          }, 1000);
1189	        });
1190	      } else {
1191	        var __unmatched_281 = Date.now();
1192	        var name = function() {
1193	          var deltaX;
1194	          deltaX = (Date.now() - __unmatched_281) / 1000;
1195	          deltaX = 0 > deltaX ? 0 : 1 < deltaX ? 1 : deltaX;
1196	          deltaX = deltaX * deltaX * (3 - 2 * deltaX);
1197	          $('.agario-exp-bar .progress-bar-text').text(~~(width + (rect.e - width) * deltaX) + '/' + rect.c + ' XP');
1198	          $('.agario-exp-bar .progress-bar').css('width', (88 * (width + (rect.e - width) * deltaX) / rect.c).toFixed(2) + '%');
1199	          if (1 > deltaX) {
1200	            window.requestAnimationFrame(name);
1201	          } else if (callback) {
1202	            callback();
1203	          }
1204	        };
1205	        window.requestAnimationFrame(name);
1206	      }
1207	    } else {
1208	      $('.agario-profile-panel .progress-bar-star').text(rect.d);
1209	      $('.agario-exp-bar .progress-bar-text').text(rect.e + '/' + rect.c + ' XP');
1210	      $('.agario-exp-bar .progress-bar').css('width', (88 * rect.e / rect.c).toFixed(2) + '%');
1211	      if (callback) {
1212	        callback();
1213	      }
1214	    }
1215	  }
1216	  function __unmatched_45(__unmatched_284) {
1217	    if ('string' == typeof __unmatched_284) {
1218	      __unmatched_284 = JSON.parse(__unmatched_284);
1219	    }
1220	    if (Date.now() + 1800000 > __unmatched_284.expires) {
1221	      $('#helloContainer').attr('data-logged-in', '0');
1222	    } else {
1223	      window.localStorage[i_] = JSON.stringify(__unmatched_284);
1224	      __unmatched_110 = __unmatched_284.authToken;
1225	      $('.agario-profile-name').text(__unmatched_284.name);
1226	      RefreshAds();
1227	      __unmatched_44({
1228	        e: __unmatched_284.xp,
1229	        c: __unmatched_284.xpNeeded,
1230	        d: __unmatched_284.level
1231	      });
1232	      $('#helloContainer').attr('data-logged-in', '1');
1233	    }
1234	  }
1235	  function __unmatched_46(data) {
1236	    data = data.split('\n');
1237	    __unmatched_45({
1238	      name: data[0],
1239	      fbid: data[1],
1240	      authToken: data[2],
1241	      expires: 1000 * +data[3],
1242	      level: +data[4],
1243	      xp: +data[5],
1244	      xpNeeded: +data[6]
1245	    });
1246	  }
1247	  function UpdateScale(__unmatched_286) {
1248	    if ('connected' == __unmatched_286.status) {
1249	      var y = __unmatched_286.authResponse.accessToken;
1250	      console.log(y);
1251	      window.FB.api('/me/picture?width=180&height=180', function(__unmatched_288) {
1252	        window.localStorage.fbPictureCache = __unmatched_288.data.url;
1253	        $('.agario-profile-picture').attr('src', __unmatched_288.data.url);
1254	      });
1255	      $('#helloContainer').attr('data-logged-in', '1');
1256	      if (null != __unmatched_110) {
1257	        $.ajax(g_protocol + 'checkToken', {
1258	          error: function() {
1259	            __unmatched_110 = null;
1260	            UpdateScale(__unmatched_286);
1261	          },
1262	          success: function(__unmatched_289) {
1263	            __unmatched_289 = __unmatched_289.split('\n');
1264	            __unmatched_44({
1265	              d: +__unmatched_289[0],
1266	              e: +__unmatched_289[1],
1267	              c: +__unmatched_289[2]
1268	            });
1269	          },
1270	          dataType: 'text',
1271	          method: 'POST',
1272	          cache: false,
1273	          crossDomain: true,
1274	          data: __unmatched_110
1275	        });
1276	      } else {
1277	        $.ajax(g_protocol + 'facebookLogin', {
1278	          error: function() {
1279	            __unmatched_110 = null;
1280	            $('#helloContainer').attr('data-logged-in', '0');
1281	          },
1282	          success: __unmatched_46,
1283	          dataType: 'text',
1284	          method: 'POST',
1285	          cache: false,
1286	          crossDomain: true,
1287	          data: y
1288	        });
1289	      }
1290	    }
1291	  }
1292	  function RenderLoop(x) {
1293	    n(':party');
1294	    $('#helloContainer').attr('data-party-state', '4');
1295	    x = decodeURIComponent(x).replace(/.*#/gim, '');
1296	    __unmatched_49('#' + window.encodeURIComponent(x));
1297	    $.ajax(g_protocol + 'getToken', {
1298	      error: function() {
1299	        $('#helloContainer').attr('data-party-state', '6');
1300	      },
1301	      success: function(quick) {
1302	        quick = quick.split('\n');
1303	        $('.partyToken').val('agar.io/#' + window.encodeURIComponent(x));
1304	        $('#helloContainer').attr('data-party-state', '5');
1305	        n(':party');
1306	        Connect('ws://' + quick[0], x);
1307	      },
1308	      dataType: 'text',
1309	      method: 'POST',
1310	      cache: false,
1311	      crossDomain: true,
1312	      data: x
1313	    });
1314	  }
1315	  function __unmatched_49(item) {
1316	    if (window.history && window.history.replaceState) {
1317	      window.history.replaceState({}, window.document.title, item);
1318	    }
1319	  }
1320	  function __unmatched_50(__unmatched_293, __unmatched_294) {
1321	    var playerOwned = -1 != g_playerCellIds.indexOf(__unmatched_293.id);
1322	    var __unmatched_296 = -1 != g_playerCellIds.indexOf(__unmatched_294.id);
1323	    var __unmatched_297 = 30 > __unmatched_294.size;
1324	    if (playerOwned && __unmatched_297) {
1325	      ++__unmatched_145;
1326	    }
1327	    if (!(__unmatched_297 || !playerOwned || __unmatched_296)) {
1328	      ++__unmatched_152;
1329	    }
1330	  }
1331	  function __unmatched_51(__unmatched_298) {
1332	    __unmatched_298 = ~~__unmatched_298;
1333	    var color = (__unmatched_298 % 60).toString();
1334	    __unmatched_298 = (~~(__unmatched_298 / 60)).toString();
1335	    if (2 > color.length) {
1336	      color = '0' + color;
1337	    }
1338	    return __unmatched_298 + ':' + color;
1339	  }
1340	  function __unmatched_52() {
1341	    if (null == g_scoreEntries) {
1342	      return 0;
1343	    }
1344	    for (var i = 0; i < g_scoreEntries.length; ++i) {
1345	      if (-1 != g_playerCellIds.indexOf(g_scoreEntries[i].id)) {
1346	        return i + 1;
1347	      }
1348	    }
1349	    return 0;
1350	  }
1351	  function ShowOverlay() {
1352	    $('.stats-food-eaten').text(__unmatched_145);
1353	    $('.stats-time-alive').text(__unmatched_51((__unmatched_150 - __unmatched_149) / 1000));
1354	    $('.stats-leaderboard-time').text(__unmatched_51(__unmatched_151));
1355	    $('.stats-highest-mass').text(~~(g_maxScore / 100));
1356	    $('.stats-cells-eaten').text(__unmatched_152);
1357	    $('.stats-top-position').text(0 == g_mode ? ':(' : g_mode);
1358	    var g_height = document.getElementById('statsGraph');
1359	    if (g_height) {
1360	      var pointsAcc = g_height.getContext('2d');
1361	      var scale = g_height.width;
1362	      var g_height = g_height.height;
1363	      pointsAcc.clearRect(0, 0, scale, g_height);
1364	      if (2 < points.length) {
1365	        for (var maxSize = 200, i = 0; i < points.length; i++) {
1366	          maxSize = Math.max(points[i], maxSize);
1367	        }
1368	        pointsAcc.lineWidth = 3;
1369	        pointsAcc.lineCap = 'round';
1370	        pointsAcc.lineJoin = 'round';
1371	        pointsAcc.strokeStyle = __unmatched_146;
1372	        pointsAcc.fillStyle = __unmatched_146;
1373	        pointsAcc.beginPath();
1374	        pointsAcc.moveTo(0, g_height - points[0] / maxSize * (g_height - 10) + 10);
1375	        for (i = 1; i < points.length; i += Math.max(~~(points.length / scale), 1)) {
1376	          for (var __unmatched_306 = i / (points.length - 1) * scale, thisNode = [], __unmatched_308 = -20; 20 >= __unmatched_308; ++__unmatched_308) {
1377	            if (!(0 > i + __unmatched_308 || i + __unmatched_308 >= points.length)) {
1378	              thisNode.push(points[i + __unmatched_308]);
1379	            }
1380	          }
1381	          thisNode = thisNode.reduce(function(__unmatched_309, __unmatched_310) {
1382	              return __unmatched_309 + __unmatched_310;
1383	            }) / thisNode.length / maxSize;
1384	          pointsAcc.lineTo(__unmatched_306, g_height - thisNode * (g_height - 10) + 10);
1385	        }
1386	        pointsAcc.stroke();
1387	        pointsAcc.globalAlpha = 0.5;
1388	        pointsAcc.lineTo(scale, g_height);
1389	        pointsAcc.lineTo(0, g_height);
1390	        pointsAcc.fill();
1391	        pointsAcc.globalAlpha = 1;
1392	      }
1393	    }
1394	  }
1395	  if (!window.agarioNoInit) {
1396	    var __unmatched_54 = window.location.protocol;
1397	    var g_secure = 'https:' == __unmatched_54;
1398	    var g_protocol = __unmatched_54 + '//m.agar.io/';
1399	    var __unmatched_57 = window.navigator.userAgent;
1400	    if (-1 != __unmatched_57.indexOf('Android')) {
1401	      if (window.ga) {
1402	        window.ga('send', 'event', 'MobileRedirect', 'PlayStore');
1403	      }
1404	      setTimeout(function() {
1405	        window.location.href = 'https://play.google.com/store/apps/details?id=com.miniclip.agar.io';
1406	      }, 1000);
1407	    } else if (-1 != __unmatched_57.indexOf('iPhone') || -1 != __unmatched_57.indexOf('iPad') || -1 != __unmatched_57.indexOf('iPod')) {
1408	      if (window.ga) {
1409	        window.ga('send', 'event', 'MobileRedirect', 'AppStore');
1410	      }
1411	      setTimeout(function() {
1412	        window.location.href = 'https://itunes.apple.com/app/agar.io/id995999703?mt=8&at=1l3vajp';
1413	      }, 1000);
1414	    } else {
1415	      var g_canvas_;
1416	      var g_context;
1417	      var g_canvas;
1418	      var g_ready;
1419	      var noClip;
1420	      var g_pointTree = null;
1421	      var g_socket = null;
1422	      var g_viewX = 0;
1423	      var g_viewY = 0;
1424	      var g_playerCellIds = [];
1425	      var g_playerCells = [];
1426	      var g_cellsById = {};
1427	      var g_cells = [];
1428	      var g_destroyedCells = [];
1429	      var g_scoreEntries = [];
1430	      var g_mouseX = 0;
1431	      var g_mouseY = 0;
1432	      var g_moveX = -1;
1433	      var g_moveY = -1;
1434	      var __unmatched_77 = 0;
1435	      var g_time = 0;
1436	      var __unmatched_79 = 0;
1437	      var g_nick = null;
1438	      var g_minX = 0;
1439	      var g_minY = 0;
1440	      var g_maxX = 10000;
1441	      var g_maxY = 10000;
1442	      var g_scale = 1;
1443	      var g_region = null;
1444	      var g_showSkins = true;
1445	      var g_showNames = true;
1446	      var g_noColors = false;
1447	      var __unmatched_90 = false;
1448	      var g_maxScore = 0;
1449	      var g_showMass = true;
1450	      var g_darkTheme = true;
1451	      var g_viewX_ = g_viewX = ~~((g_minX + g_maxX) / 2);
1452	      var g_viewY_ = g_viewY = ~~((g_minY + g_maxY) / 2);
1453	      var g_scale_ = 1;
1454	      var __unmatched_97 = '';
1455	      var g_scorePartitions = null;
1456	      var g_drawLines = false;
1457	      var __unmatched_100 = false;
1458	      var g_linesY_ = 0;
1459	      var g_linesX_ = 0;
1460	      var g_linesX = 0;
1461	      var g_linesY = 0;
1462	      var g_ABGroup = 0;
1463	      var g_teamColors = [
1464	        '#333333',
1465	        '#FF3333',
1466	        '#33FF33',
1467	        '#3333FF'
1468	      ];
1469	      var g_showTrails = false;
1470	      var g_connectSuccessful = false;
1471	      var __unmatched_109 = 0;
1472	      var __unmatched_110 = null;
1473	      var g_zoom = 1;
1474	      var qkeyDown = 1;
1475	      var g_playerCellDestroyed = false;
1476	      var __unmatched_114 = 0;
1477	      var __unmatched_115 = true;
1478	      var __unmatched_116 = {};
1479	      (function() {
1480	        var cached = window.location.search;
1481	        if ('?' == cached.charAt(0)) {
1482	          cached = cached.slice(1);
1483	        }
1484	        for (var cached = cached.split('&'), i = 0; i < cached.length; i++) {
1485	          var parts = cached[i].split('=');
1486	          __unmatched_116[parts[0]] = parts[1];
1487	        }
1488	      }());
1489	      var canvas = new Image();
1490	      canvas.src = 'img/background.png';
1491	      var g_touchCapable = 'ontouchstart' in window && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(window.navigator.userAgent);
1492	      var g_splitImage = new Image();
1493	      g_splitImage.src = 'img/split.png';
1494	      var canvasTest = document.createElement('canvas');
1495	      if ('undefined' == typeof console || 'undefined' == typeof DataView || 'undefined' == typeof WebSocket || null == canvasTest || null == canvasTest.getContext || null == window.localStorage) {
1496	        alert('You browser does not support this game, we recommend you to use Firefox to play this');
1497	      } else {
1498	        var g_regionLabels = null;
1499	        window.setNick = function(__unmatched_314) {
1500	          if (window.ga) {
1501	            window.ga('send', 'event', 'Nick', __unmatched_314.toLowerCase());
1502	          }
1503	          HideOverlay();
1504	          g_nick = __unmatched_314;
1505	          SendNick();
1506	          g_maxScore = 0;
1507	        };
1508	        window.setRegion = SetRegion;
1509	        var __unmatched_122 = true;
1510	        window.setSkins = function(val) {
1511	          g_showSkins = val;
1512	        };
1513	        window.setNames = function(val) {
1514	          g_showNames = val;
1515	        };
1516	        window.setDarkTheme = function(val) {
1517	          g_showMass = val;
1518	        };
1519	        window.setColors = function(val) {
1520	          g_noColors = val;
1521	        };
1522	        window.setShowMass = function(val) {
1523	          g_darkTheme = val;
1524	        };
1525	        window.spectate = function() {
1526	          g_nick = null;
1527	          SendCmd(1);
1528	          HideOverlay();
1529	        };
1530	        window.setGameMode = function(__unmatched_320) {
1531	          if (__unmatched_320 != __unmatched_97) {
1532	            if (':party' == __unmatched_97) {
1533	              $('#helloContainer').attr('data-party-state', '0');
1534	            }
1535	            n(__unmatched_320);
1536	            if (':party' != __unmatched_320) {
1537	              Start();
1538	            }
1539	          }
1540	        };
1541	        window.setAcid = function(val) {
1542	          g_showTrails = val;
1543	        };
1544	        if (null != window.localStorage) {
1545	          if (null == window.localStorage.AB9) {
1546	            window.localStorage.AB9 = 0 + ~~(100 * Math.random());
1547	          }
1548	          g_ABGroup = +window.localStorage.AB9;
1549	          window.ABGroup = g_ABGroup;
1550	        }
1551	        $.get(__unmatched_54 + '//gc.agar.io', function(code) {
1552	          var __unmatched_323 = code.split(' ');
1553	          code = __unmatched_323[0];
1554	          __unmatched_323 = __unmatched_323[1] || '';
1555	          if (-1 == ['UA'].indexOf(code)) {
1556	            g_skinNamesA.push('ussr');
1557	          }
1558	          if (g_regionsByCC.hasOwnProperty(code)) {
1559	            if ('string' == typeof g_regionsByCC[code]) {
1560	              if (!g_region) {
1561	                SetRegion(g_regionsByCC[code]);
1562	              } else if (g_regionsByCC[code].hasOwnProperty(__unmatched_323)) {
1563	                if (!g_region) {
1564	                  SetRegion(g_regionsByCC[code][__unmatched_323]);
1565	                }
1566	              }
1567	            }
1568	          }
1569	        }, 'text');
1570	        var g_canRefreshAds = true;
1571	        var g_refreshAdsCooldown = 0;
1572	        var g_regionsByCC = {
1573	          AF: 'JP-Tokyo',
1574	          AX: 'EU-London',
1575	          AL: 'EU-London',
1576	          DZ: 'EU-London',
1577	          AS: 'SG-Singapore',
1578	          AD: 'EU-London',
1579	          AO: 'EU-London',
1580	          AI: 'US-Atlanta',
1581	          AG: 'US-Atlanta',
1582	          AR: 'BR-Brazil',
1583	          AM: 'JP-Tokyo',
1584	          AW: 'US-Atlanta',
1585	          AU: 'SG-Singapore',
1586	          AT: 'EU-London',
1587	          AZ: 'JP-Tokyo',
1588	          BS: 'US-Atlanta',
1589	          BH: 'JP-Tokyo',
1590	          BD: 'JP-Tokyo',
1591	          BB: 'US-Atlanta',
1592	          BY: 'EU-London',
1593	          BE: 'EU-London',
1594	          BZ: 'US-Atlanta',
1595	          BJ: 'EU-London',
1596	          BM: 'US-Atlanta',
1597	          BT: 'JP-Tokyo',
1598	          BO: 'BR-Brazil',
1599	          BQ: 'US-Atlanta',
1600	          BA: 'EU-London',
1601	          BW: 'EU-London',
1602	          BR: 'BR-Brazil',
1603	          IO: 'JP-Tokyo',
1604	          VG: 'US-Atlanta',
1605	          BN: 'JP-Tokyo',
1606	          BG: 'EU-London',
1607	          BF: 'EU-London',
1608	          BI: 'EU-London',
1609	          KH: 'JP-Tokyo',
1610	          CM: 'EU-London',
1611	          CA: 'US-Atlanta',
1612	          CV: 'EU-London',
1613	          KY: 'US-Atlanta',
1614	          CF: 'EU-London',
1615	          TD: 'EU-London',
1616	          CL: 'BR-Brazil',
1617	          CN: 'CN-China',
1618	          CX: 'JP-Tokyo',
1619	          CC: 'JP-Tokyo',
1620	          CO: 'BR-Brazil',
1621	          KM: 'EU-London',
1622	          CD: 'EU-London',
1623	          CG: 'EU-London',
1624	          CK: 'SG-Singapore',
1625	          CR: 'US-Atlanta',
1626	          CI: 'EU-London',
1627	          HR: 'EU-London',
1628	          CU: 'US-Atlanta',
1629	          CW: 'US-Atlanta',
1630	          CY: 'JP-Tokyo',
1631	          CZ: 'EU-London',
1632	          DK: 'EU-London',
1633	          DJ: 'EU-London',
1634	          DM: 'US-Atlanta',
1635	          DO: 'US-Atlanta',
1636	          EC: 'BR-Brazil',
1637	          EG: 'EU-London',
1638	          SV: 'US-Atlanta',
1639	          GQ: 'EU-London',
1640	          ER: 'EU-London',
1641	          EE: 'EU-London',
1642	          ET: 'EU-London',
1643	          FO: 'EU-London',
1644	          FK: 'BR-Brazil',
1645	          FJ: 'SG-Singapore',
1646	          FI: 'EU-London',
1647	          FR: 'EU-London',
1648	          GF: 'BR-Brazil',
1649	          PF: 'SG-Singapore',
1650	          GA: 'EU-London',
1651	          GM: 'EU-London',
1652	          GE: 'JP-Tokyo',
1653	          DE: 'EU-London',
1654	          GH: 'EU-London',
1655	          GI: 'EU-London',
1656	          GR: 'EU-London',
1657	          GL: 'US-Atlanta',
1658	          GD: 'US-Atlanta',
1659	          GP: 'US-Atlanta',
1660	          GU: 'SG-Singapore',
1661	          GT: 'US-Atlanta',
1662	          GG: 'EU-London',
1663	          GN: 'EU-London',
1664	          GW: 'EU-London',
1665	          GY: 'BR-Brazil',
1666	          HT: 'US-Atlanta',
1667	          VA: 'EU-London',
1668	          HN: 'US-Atlanta',
1669	          HK: 'JP-Tokyo',
1670	          HU: 'EU-London',
1671	          IS: 'EU-London',
1672	          IN: 'JP-Tokyo',
1673	          ID: 'JP-Tokyo',
1674	          IR: 'JP-Tokyo',
1675	          IQ: 'JP-Tokyo',
1676	          IE: 'EU-London',
1677	          IM: 'EU-London',
1678	          IL: 'JP-Tokyo',
1679	          IT: 'EU-London',
1680	          JM: 'US-Atlanta',
1681	          JP: 'JP-Tokyo',
1682	          JE: 'EU-London',
1683	          JO: 'JP-Tokyo',
1684	          KZ: 'JP-Tokyo',
1685	          KE: 'EU-London',
1686	          KI: 'SG-Singapore',
1687	          KP: 'JP-Tokyo',
1688	          KR: 'JP-Tokyo',
1689	          KW: 'JP-Tokyo',
1690	          KG: 'JP-Tokyo',
1691	          LA: 'JP-Tokyo',
1692	          LV: 'EU-London',
1693	          LB: 'JP-Tokyo',
1694	          LS: 'EU-London',
1695	          LR: 'EU-London',
1696	          LY: 'EU-London',
1697	          LI: 'EU-London',
1698	          LT: 'EU-London',
1699	          LU: 'EU-London',
1700	          MO: 'JP-Tokyo',
1701	          MK: 'EU-London',
1702	          MG: 'EU-London',
1703	          MW: 'EU-London',
1704	          MY: 'JP-Tokyo',
1705	          MV: 'JP-Tokyo',
1706	          ML: 'EU-London',
1707	          MT: 'EU-London',
1708	          MH: 'SG-Singapore',
1709	          MQ: 'US-Atlanta',
1710	          MR: 'EU-London',
1711	          MU: 'EU-London',
1712	          YT: 'EU-London',
1713	          MX: 'US-Atlanta',
1714	          FM: 'SG-Singapore',
1715	          MD: 'EU-London',
1716	          MC: 'EU-London',
1717	          MN: 'JP-Tokyo',
1718	          ME: 'EU-London',
1719	          MS: 'US-Atlanta',
1720	          MA: 'EU-London',
1721	          MZ: 'EU-London',
1722	          MM: 'JP-Tokyo',
1723	          NA: 'EU-London',
1724	          NR: 'SG-Singapore',
1725	          NP: 'JP-Tokyo',
1726	          NL: 'EU-London',
1727	          NC: 'SG-Singapore',
1728	          NZ: 'SG-Singapore',
1729	          NI: 'US-Atlanta',
1730	          NE: 'EU-London',
1731	          NG: 'EU-London',
1732	          NU: 'SG-Singapore',
1733	          NF: 'SG-Singapore',
1734	          MP: 'SG-Singapore',
1735	          NO: 'EU-London',
1736	          OM: 'JP-Tokyo',
1737	          PK: 'JP-Tokyo',
1738	          PW: 'SG-Singapore',
1739	          PS: 'JP-Tokyo',
1740	          PA: 'US-Atlanta',
1741	          PG: 'SG-Singapore',
1742	          PY: 'BR-Brazil',
1743	          PE: 'BR-Brazil',
1744	          PH: 'JP-Tokyo',
1745	          PN: 'SG-Singapore',
1746	          PL: 'EU-London',
1747	          PT: 'EU-London',
1748	          PR: 'US-Atlanta',
1749	          QA: 'JP-Tokyo',
1750	          RE: 'EU-London',
1751	          RO: 'EU-London',
1752	          RU: 'RU-Russia',
1753	          RW: 'EU-London',
1754	          BL: 'US-Atlanta',
1755	          SH: 'EU-London',
1756	          KN: 'US-Atlanta',
1757	          LC: 'US-Atlanta',
1758	          MF: 'US-Atlanta',
1759	          PM: 'US-Atlanta',
1760	          VC: 'US-Atlanta',
1761	          WS: 'SG-Singapore',
1762	          SM: 'EU-London',
1763	          ST: 'EU-London',
1764	          SA: 'EU-London',
1765	          SN: 'EU-London',
1766	          RS: 'EU-London',
1767	          SC: 'EU-London',
1768	          SL: 'EU-London',
1769	          SG: 'JP-Tokyo',
1770	          SX: 'US-Atlanta',
1771	          SK: 'EU-London',
1772	          SI: 'EU-London',
1773	          SB: 'SG-Singapore',
1774	          SO: 'EU-London',
1775	          ZA: 'EU-London',
1776	          SS: 'EU-London',
1777	          ES: 'EU-London',
1778	          LK: 'JP-Tokyo',
1779	          SD: 'EU-London',
1780	          SR: 'BR-Brazil',
1781	          SJ: 'EU-London',
1782	          SZ: 'EU-London',
1783	          SE: 'EU-London',
1784	          CH: 'EU-London',
1785	          SY: 'EU-London',
1786	          TW: 'JP-Tokyo',
1787	          TJ: 'JP-Tokyo',
1788	          TZ: 'EU-London',
1789	          TH: 'JP-Tokyo',
1790	          TL: 'JP-Tokyo',
1791	          TG: 'EU-London',
1792	          TK: 'SG-Singapore',
1793	          TO: 'SG-Singapore',
1794	          TT: 'US-Atlanta',
1795	          TN: 'EU-London',
1796	          TR: 'TK-Turkey',
1797	          TM: 'JP-Tokyo',
1798	          TC: 'US-Atlanta',
1799	          TV: 'SG-Singapore',
1800	          UG: 'EU-London',
1801	          UA: 'EU-London',
1802	          AE: 'EU-London',
1803	          GB: 'EU-London',
1804	          US: 'US-Atlanta',
1805	          UM: 'SG-Singapore',
1806	          VI: 'US-Atlanta',
1807	          UY: 'BR-Brazil',
1808	          UZ: 'JP-Tokyo',
1809	          VU: 'SG-Singapore',
1810	          VE: 'BR-Brazil',
1811	          VN: 'JP-Tokyo',
1812	          WF: 'SG-Singapore',
1813	          EH: 'EU-London',
1814	          YE: 'JP-Tokyo',
1815	          ZM: 'EU-London',
1816	          ZW: 'EU-London'
1817	        };
1818	        var __unmatched_126 = null;
1819	        window.connect = Connect;
1820	        var g_retryTimeout = 500;
1821	        var __unmatched_128 = null;
1822	        var __unmatched_129 = 0;
1823	        var g_lastMoveY = -1;
1824	        var g_lastMoveX = -1;
1825	        window.refreshPlayerInfo = function() {
1826	          SendCmd(253);
1827	        };
1828	        var g_leaderboardCanvas = null;
1829	        var g_pointNumScale = 1;
1830	        var g_cachedScore = null;
1831	        var __unmatched_135 = function() {
1832	          var sizeRatio = Date.now();
1833	          var maxItems = 1000 / 60;
1834	          return function() {
1835	            window.requestAnimationFrame(__unmatched_135);
1836	            var x = Date.now();
1837	            var step = x - sizeRatio;
1838	            if (step > maxItems) {
1839	              sizeRatio = x - step % maxItems;
1840	              if (!IsConnected() || 240 > Date.now() - __unmatched_109) {
1841	                GetScore();
1842	              } else {
1843	                console.warn('Skipping draw');
1844	              }
1845	              __unmatched_143();
1846	            }
1847	          };
1848	        }();
1849	        var g_skinCache = {};
1850	        var g_skinNamesA = 'poland;usa;china;russia;canada;australia;spain;brazil;germany;ukraine;france;sweden;chaplin;north korea;south korea;japan;united kingdom;earth;greece;latvia;lithuania;estonia;finland;norway;cia;maldivas;austria;nigeria;reddit;yaranaika;confederate;9gag;indiana;4chan;italy;bulgaria;tumblr;2ch.hk;hong kong;portugal;jamaica;german empire;mexico;sanik;switzerland;croatia;chile;indonesia;bangladesh;thailand;iran;iraq;peru;moon;botswana;bosnia;netherlands;european union;taiwan;pakistan;hungary;satanist;qing dynasty;matriarchy;patriarchy;feminism;ireland;texas;facepunch;prodota;cambodia;steam;piccolo;ea;india;kc;denmark;quebec;ayy lmao;sealand;bait;tsarist russia;origin;vinesauce;stalin;belgium;luxembourg;stussy;prussia;8ch;argentina;scotland;sir;romania;belarus;wojak;doge;nasa;byzantium;imperial japan;french kingdom;somalia;turkey;mars;pokerface;8;irs;receita federal;facebook;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;venezuela;blatter;chavez;cuba;fidel;merkel;palin;queen;boris;bush;trump'.split(';');
1851	        var __unmatched_138 = '8;nasa;putin;merkel;tsipras;obama;kim jong-un;dilma;hollande;berlusconi;cameron;clinton;hillary;blatter;chavez;fidel;merkel;palin;queen;boris;bush;trump'.split(';');
1852	        var node = {};
1853	        Node.prototype = {
1854	          P: null,
1855	          x: 0,
1856	          y: 0,
1857	          g: 0,
1858	          b: 0
1859	        };
1860	        Cell.prototype = {
1861	          id: 0,
1862	          a: null,
1863	          name: null,
1864	          k: null,
1865	          I: null,
1866	          x: 0,
1867	          y: 0,
1868	          size: 0,
1869	          o: 0,
1870	          p: 0,
1871	          n: 0,
1872	          C: 0,
1873	          D: 0,
1874	          m: 0,
1875	          T: 0,
1876	          K: 0,
1877	          W: 0,
1878	          A: false,
1879	          f: false,
1880	          j: false,
1881	          L: true,
1882	          S: 0,
1883	          V: null,
1884	          R: function() {
1885	            var i;
1886	            for (i = 0; i < g_cells.length; i++) {
1887	              if (g_cells[i] == this) {
1888	                g_cells.splice(i, 1);
1889	                break;
1890	              }
1891	            }
1892	            delete g_cellsById[this.id];
1893	            i = g_playerCells.indexOf(this);
1894	            if (-1 != i) {
1895	              __unmatched_90 = true;
1896	              g_playerCells.splice(i, 1);
1897	            }
1898	            i = g_playerCellIds.indexOf(this.id);
1899	            if (-1 != i) {
1900	              g_playerCellIds.splice(i, 1);
1901	            }
1902	            this.A = true;
1903	            if (0 < this.S) {
1904	              g_destroyedCells.push(this);
1905	            }
1906	          },
1907	          i: function() {
1908	            return Math.max(~~(0.3 * this.size), 24);
1909	          },
1910	          t: function(val) {
1911	            if (this.name = val) {
1912	              if (null == this.k) {
1913	                this.k = new CachedCanvas(this.i(), '#FFFFFF', true, '#000000');
1914	              } else {
1915	                this.k.G(this.i());
1916	              }
1917	              this.k.u(this.name);
1918	            }
1919	          },
1920	          Q: function() {
1921	            for (var num = this.B(); this.a.length > num;) {
1922	              var i = ~~(Math.random() * this.a.length);
1923	              this.a.splice(i, 1);
1924	            }
1925	            for (0 == this.a.length && 0 < num && this.a.push(new Node(this, this.x, this.y, this.size, Math.random() - 0.5)); this.a.length < num;) {
1926	              i = ~~(Math.random() * this.a.length);
1927	              i = this.a[i];
1928	              this.a.push(new Node(this, i.x, i.y, i.g, i.b));
1929	            }
1930	          },
1931	          B: function() {
1932	            var num = 10;
1933	            if (20 > this.size) {
1934	              num = 0;
1935	            }
1936	            if (this.f) {
1937	              num = 30;
1938	            }
1939	            var size = this.size;
1940	            if (!this.f) {
1941	              size *= g_scale;
1942	            }
1943	            size *= g_pointNumScale;
1944	            if (this.T & 32) {
1945	              size *= 0.25;
1946	            }
1947	            return ~~Math.max(size, num);
1948	          },
1949	          da: function() {
1950	            this.Q();
1951	            for (var cell = this.a, num = cell.length, i = 0; i < num; ++i) {
1952	              var prevAcc = cell[(i - 1 + num) % num].b;
1953	              var nextAcc = cell[(i + 1) % num].b;
1954	              cell[i].b += (Math.random() - 0.5) * (this.j ? 3 : 1);
1955	              cell[i].b *= 0.7;
1956	              if (10 < cell[i].b) {
1957	                cell[i].b = 10;
1958	              }
1959	              if (-10 > cell[i].b) {
1960	                cell[i].b = -10;
1961	              }
1962	              cell[i].b = (prevAcc + nextAcc + 8 * cell[i].b) / 10;
1963	            }
1964	            for (var thisCell = this, roll = this.f ? 0 : (this.id / 1000 + g_time / 10000) % (2 * Math.PI), i = 0; i < num; ++i) {
1965	              var size = cell[i].g;
1966	              var prevAcc = cell[(i - 1 + num) % num].g;
1967	              var nextAcc = cell[(i + 1) % num].g;
1968	              if (15 < this.size && null != g_pointTree && 20 < this.size * g_scale && 0 < this.id) {
1969	                var reduce = false;
1970	                var x = cell[i].x;
1971	                var y = cell[i].y;
1972	                g_pointTree.ea(x - 5, y - 5, 10, 10, function(rect) {
1973	                  if (rect.P != thisCell && 25 > (x - rect.x) * (x - rect.x) + (y - rect.y) * (y - rect.y)) {
1974	                    reduce = true;
1975	                  }
1976	                });
1977	                if (!reduce && (cell[i].x < g_minX || cell[i].y < g_minY || cell[i].x > g_maxX || cell[i].y > g_maxY)) {
1978	                  reduce = true;
1979	                }
1980	                if (reduce) {
1981	                  if (0 < cell[i].b) {
1982	                    cell[i].b = 0;
1983	                  }
1984	                  cell[i].b -= 1;
1985	                }
1986	              }
1987	              size += cell[i].b;
1988	              if (0 > size) {
1989	                size = 0;
1990	              }
1991	              size = this.j ? (19 * size + this.size) / 20 : (12 * size + this.size) / 13;
1992	              cell[i].g = (prevAcc + nextAcc + 8 * size) / 10;
1993	              prevAcc = 2 * Math.PI / num;
1994	              nextAcc = this.a[i].g;
1995	              if (this.f && 0 == i % 2) {
1996	                nextAcc += 5;
1997	              }
1998	              cell[i].x = this.x + Math.cos(prevAcc * i + roll) * nextAcc;
1999	              cell[i].y = this.y + Math.sin(prevAcc * i + roll) * nextAcc;
2000	            }
2001	          },
2002	          J: function() {
2003	            if (0 >= this.id) {
2004	              return 1;
2005	            }
2006	            var posRatio;
2007	            posRatio = (g_time - this.K) / 120;
2008	            posRatio = 0 > posRatio ? 0 : 1 < posRatio ? 1 : posRatio;
2009	            var sizeRatio = 0 > posRatio ? 0 : 1 < posRatio ? 1 : posRatio;
2010	            this.i();
2011	            if (this.A && 1 <= sizeRatio) {
2012	              var i = g_destroyedCells.indexOf(this);
2013	              if (-1 != i) {
2014	                g_destroyedCells.splice(i, 1);
2015	              }
2016	            }
2017	            this.x = posRatio * (this.C - this.o) + this.o;
2018	            this.y = posRatio * (this.D - this.p) + this.p;
2019	            this.size = sizeRatio * (this.m - this.n) + this.n;
2020	            return sizeRatio;
2021	          },
2022	          H: function() {
2023	            return 0 >= this.id ? true : this.x + this.size + 40 < g_viewX - g_ready / 2 / g_scale || this.y + this.size + 40 < g_viewY - noClip / 2 / g_scale || this.x - this.size - 40 > g_viewX + g_ready / 2 / g_scale || this.y - this.size - 40 > g_viewY + noClip / 2 / g_scale ? false : true;
2024	          },
2025	          s: function(context) {
2026	            if (this.H()) {
2027	              ++this.S;
2028	              var isSimpleDrawing = 0 < this.id && !this.f && !this.j && 0.4 > g_scale;
2029	              if (5 > this.B() && 0 < this.id) {
2030	                isSimpleDrawing = true;
2031	              }
2032	              if (this.L && !isSimpleDrawing) {
2033	                for (var text = 0; text < this.a.length; text++) {
2034	                  this.a[text].g = this.size;
2035	                }
2036	              }
2037	              this.L = isSimpleDrawing;
2038	              context.save();
2039	              this.W = g_time;
2040	              text = this.J();
2041	              if (this.A) {
2042	                context.globalAlpha *= 1 - text;
2043	              }
2044	              context.lineWidth = 10;
2045	              context.lineCap = 'round';
2046	              context.lineJoin = this.f ? 'miter' : 'round';
2047	              if (g_noColors) {
2048	                context.fillStyle = '#FFFFFF';
2049	                context.strokeStyle = '#AAAAAA';
2050	              } else {
2051	                context.fillStyle = this.color;
2052	                context.strokeStyle = this.color;
2053	              }
2054	              if (isSimpleDrawing) {
2055	                context.beginPath();
2056	                context.arc(this.x, this.y, this.size + 5, 0, 2 * Math.PI, false);
2057	              } else {
2058	                this.da();
2059	                context.beginPath();
2060	                var num = this.B();
2061	                context.moveTo(this.a[0].x, this.a[0].y);
2062	                for (text = 1; text <= num; ++text) {
2063	                  var skin = text % num;
2064	                  context.lineTo(this.a[skin].x, this.a[skin].y);
2065	                }
2066	              }
2067	              context.closePath();
2068	              text = this.name.toLowerCase();
2069	              if (!this.j && g_showSkins && ':teams' != __unmatched_97) {
2070	                num = this.V;
2071	                if (null == num) {
2072	                  num = null;
2073	                } else if (':' == num[0]) {
2074	                  if (!node.hasOwnProperty(num)) {
2075	                    node[num] = new Image();
2076	                    node[num].src = num.slice(1);
2077	                  }
2078	                  num = 0 != node[num].width && node[num].complete ? node[num] : null;
2079	                } else {
2080	                  num = null;
2081	                }
2082	                if (!num) {
2083	                  if (-1 != g_skinNamesA.indexOf(text)) {
2084	                    if (!g_skinCache.hasOwnProperty(text)) {
2085	                      g_skinCache[text] = new Image();
2086	                      g_skinCache[text].src = 'skins/' + text + '.png';
2087	                    }
2088	                    num = 0 != g_skinCache[text].width && g_skinCache[text].complete ? g_skinCache[text] : null;
2089	                  } else {
2090	                    num = null;
2091	                  }
2092	                }
2093	              } else {
2094	                num = null;
2095	              }
2096	              skin = num;
2097	              if (!isSimpleDrawing) {
2098	                context.stroke();
2099	              }
2100	              context.fill();
2101	              if (null != skin) {
2102	                context.save();
2103	                context.clip();
2104	                context.drawImage(skin, this.x - this.size, this.y - this.size, 2 * this.size, 2 * this.size);
2105	                context.restore();
2106	              }
2107	              if ((g_noColors || 15 < this.size) && !isSimpleDrawing) {
2108	                context.strokeStyle = '#000000';
2109	                context.globalAlpha *= 0.1;
2110	                context.stroke();
2111	              }
2112	              context.globalAlpha = 1;
2113	              num = -1 != g_playerCells.indexOf(this);
2114	              isSimpleDrawing = ~~this.y;
2115	              if (0 != this.id && (g_showNames || num) && this.name && this.k && (null == skin || -1 == __unmatched_138.indexOf(text))) {
2116	                skin = this.k;
2117	                skin.u(this.name);
2118	                skin.G(this.i());
2119	                text = 0 >= this.id ? 1 : Math.ceil(10 * g_scale) / 10;
2120	                skin.U(text);
2121	                var skin = skin.F();
2122	                var g_width = ~~(skin.width / text);
2123	                var g_height = ~~(skin.height / text);
2124	                context.drawImage(skin, ~~this.x - ~~(g_width / 2), isSimpleDrawing - ~~(g_height / 2), g_width, g_height);
2125	                isSimpleDrawing += skin.height / 2 / text + 4;
2126	              }
2127	              if (40 < this.size) {
2128	                if (null == this.I) {
2129	                  this.I = new CachedCanvas(this.i() / 2, '#FFFFFF', true, '#000000');
2130	                }
2131	                num = this.I;
2132	                num.G(this.i() / 1.2);
2133	                num.u(~~(this.size * this.size / 100));
2134	                text = Math.ceil(10 * g_scale) / 10;
2135	                num.U(text);
2136	                skin = num.F();
2137	                g_width = ~~(skin.width / text);
2138	                g_height = ~~(skin.height / text);
2139	                context.drawImage(skin, ~~this.x - ~~(g_width / 2), isSimpleDrawing - ~~(g_height / 2), g_width, g_height);
2140	              }
2141	              context.restore();
2142	            }
2143	          }
2144	        };
2145	        CachedCanvas.prototype = {
2146	          w: '',
2147	          M: '#000000',
2148	          O: false,
2149	          r: '#000000',
2150	          q: 16,
2151	          l: null,
2152	          N: null,
2153	          h: false,
2154	          v: 1,
2155	          G: function(val) {
2156	            if (this.q != val) {
2157	              this.q = val;
2158	              this.h = true;
2159	            }
2160	          },
2161	          U: function(val) {
2162	            if (this.v != val) {
2163	              this.v = val;
2164	              this.h = true;
2165	            }
2166	          },
2167	          setStrokeColor: function(val) {
2168	            if (this.r != val) {
2169	              this.r = val;
2170	              this.h = true;
2171	            }
2172	          },
2173	          u: function(val) {
2174	            if (val != this.w) {
2175	              this.w = val;
2176	              this.h = true;
2177	            }
2178	          },
2179	          F: function() {
2180	            if (null == this.l) {
2181	              this.l = document.createElement('canvas');
2182	              this.N = this.l.getContext('2d');
2183	            }
2184	            if (this.h) {
2185	              this.h = false;
2186	              var items = this.l;
2187	              var context = this.N;
2188	              var value = this.w;
2189	              var scale = this.v;
2190	              var size = this.q;
2191	              var font = size + 'px Ubuntu';
2192	              context.font = font;
2193	              var extra = ~~(0.2 * size);
2194	              items.width = (context.measureText(value).width + 6) * scale;
2195	              items.height = (size + extra) * scale;
2196	              context.font = font;
2197	              context.scale(scale, scale);
2198	              context.globalAlpha = 1;
2199	              context.lineWidth = 3;
2200	              context.strokeStyle = this.r;
2201	              context.fillStyle = this.M;
2202	              if (this.O) {
2203	                context.strokeText(value, 3, size - extra / 2);
2204	              }
2205	              context.fillText(value, 3, size - extra / 2);
2206	            }
2207	            return this.l;
2208	          }
2209	        };
2210	        if (!Date.now) {
2211	          Date.now = function() {
2212	            return new Date().getTime();
2213	          };
2214	        }
2215	        (function() {
2216	          for (var g_skinNamesB = [
2217	                'ms',
2218	                'moz',
2219	                'webkit',
2220	                'o'
2221	              ], i = 0; i < g_skinNamesB.length && !window.requestAnimationFrame; ++i) {
2222	            window.requestAnimationFrame = window[g_skinNamesB[i] + 'RequestAnimationFrame'];
2223	            window.cancelAnimationFrame = window[g_skinNamesB[i] + 'CancelAnimationFrame'] || window[g_skinNamesB[i] + 'CancelRequestAnimationFrame'];
2224	          }
2225	          if (!window.requestAnimationFrame) {
2226	            window.requestAnimationFrame = function(rect) {
2227	              return setTimeout(rect, 1000 / 60);
2228	            };
2229	            window.cancelAnimationFrame = function(item) {
2230	              clearTimeout(item);
2231	            };
2232	          }
2233	        }());
2234	        var QTreeFactory = {
2235	          X: function(item) {
2236	            function __unmatched_372(val) {
2237	              if (val < __unmatched_374) {
2238	                val = __unmatched_374;
2239	              }
2240	              if (val > __unmatched_376) {
2241	                val = __unmatched_376;
2242	              }
2243	              return ~~((val - __unmatched_374) / 32);
2244	            }
2245	            function __unmatched_373(__unmatched_382) {
2246	              if (__unmatched_382 < __unmatched_375) {
2247	                __unmatched_382 = __unmatched_375;
2248	              }
2249	              if (__unmatched_382 > __unmatched_377) {
2250	                __unmatched_382 = __unmatched_377;
2251	              }
2252	              return ~~((__unmatched_382 - __unmatched_375) / 32);
2253	            }
2254	            var __unmatched_374 = item.ba;
2255	            var __unmatched_375 = item.ca;
2256	            var __unmatched_376 = item.Z;
2257	            var __unmatched_377 = item.$;
2258	            var depth = ~~((__unmatched_376 - __unmatched_374) / 32) + 1;
2259	            var maxDepth = ~~((__unmatched_377 - __unmatched_375) / 32) + 1;
2260	            var point = Array(depth * maxDepth);
2261	            return {
2262	              Y: function(__unmatched_383) {
2263	                var __unmatched_384 = __unmatched_372(__unmatched_383.x) + __unmatched_373(__unmatched_383.y) * depth;
2264	                if (null == point[__unmatched_384]) {
2265	                  point[__unmatched_384] = __unmatched_383;
2266	                } else if (Array.isArray(point[__unmatched_384])) {
2267	                  point[__unmatched_384].push(__unmatched_383);
2268	                } else {
2269	                  point[__unmatched_384] = [
2270	                    point[__unmatched_384],
2271	                    __unmatched_383
2272	                  ];
2273	                }
2274	              },
2275	              ea: function(__unmatched_385, __unmatched_386, val, __unmatched_388, callback) {
2276	                var __unmatched_390 = __unmatched_372(__unmatched_385);
2277	                var __unmatched_391 = __unmatched_373(__unmatched_386);
2278	                __unmatched_385 = __unmatched_372(__unmatched_385 + val);
2279	                __unmatched_386 = __unmatched_373(__unmatched_386 + __unmatched_388);
2280	                if (0 > __unmatched_390 || __unmatched_390 >= depth || 0 > __unmatched_391 || __unmatched_391 >= maxDepth) {
2281	                  debugger;
2282	                }
2283	                for (; __unmatched_391 <= __unmatched_386; ++__unmatched_391) {
2284	                  for (__unmatched_388 = __unmatched_390; __unmatched_388 <= __unmatched_385; ++__unmatched_388) {
2285	                    if (val = point[__unmatched_388 + __unmatched_391 * depth], null != val) {
2286	                      if (Array.isArray(val)) {
2287	                        for (var i = 0; i < val.length; i++) {
2288	                          callback(val[i]);
2289	                        }
2290	                      } else {
2291	                        callback(val);
2292	                      }
2293	                    }
2294	                  }
2295	                }
2296	              }
2297	            };
2298	          }
2299	        };
2300	        var __unmatched_141 = function() {
2301	          var __unmatched_393 = new Cell(0, 0, 0, 32, '#ED1C24', '');
2302	          var __unmatched_394 = document.createElement('canvas');
2303	          __unmatched_394.width = 32;
2304	          __unmatched_394.height = 32;
2305	          var rect = __unmatched_394.getContext('2d');
2306	          return function() {
2307	            if (0 < g_playerCells.length) {
2308	              __unmatched_393.color = g_playerCells[0].color;
2309	              __unmatched_393.t(g_playerCells[0].name);
2310	            }
2311	            rect.clearRect(0, 0, 32, 32);
2312	            rect.save();
2313	            rect.translate(16, 16);
2314	            rect.scale(0.4, 0.4);
2315	            __unmatched_393.s(rect);
2316	            rect.restore();
2317	            var __unmatched_396 = document.getElementById('favicon');
2318	            var __unmatched_397 = __unmatched_396.cloneNode(true);
2319	            __unmatched_397.setAttribute('href', __unmatched_394.toDataURL('image/png'));
2320	            __unmatched_396.parentNode.replaceChild(__unmatched_397, __unmatched_396);
2321	          };
2322	        }();
2323	        $(function() {
2324	          __unmatched_141();
2325	        });
2326	        var i_ = 'loginCache3';
2327	        $(function() {
2328	          if (+window.localStorage.wannaLogin) {
2329	            if (window.localStorage[i_]) {
2330	              __unmatched_45(window.localStorage[i_]);
2331	            }
2332	            if (window.localStorage.fbPictureCache) {
2333	              $('.agario-profile-picture').attr('src', window.localStorage.fbPictureCache);
2334	            }
2335	          }
2336	        });
2337	        window.facebookLogin = function() {
2338	          window.localStorage.wannaLogin = 1;
2339	        };
2340	        window.fbAsyncInit = function() {
2341	          function __unmatched_398() {
2342	            window.localStorage.wannaLogin = 1;
2343	            if (null == window.FB) {
2344	              alert('You seem to have something blocking Facebook on your browser, please check for any extensions');
2345	            } else {
2346	              window.FB.login(function(callback) {
2347	                UpdateScale(callback);
2348	              }, {
2349	                scope: 'public_profile, email'
2350	              });
2351	            }
2352	          }
2353	          window.FB.init({
2354	            appId: '677505792353827',
2355	            cookie: true,
2356	            xfbml: true,
2357	            status: true,
2358	            version: 'v2.2'
2359	          });
2360	          window.FB.Event.subscribe('auth.statusChange', function(__unmatched_400) {
2361	            if (+window.localStorage.wannaLogin) {
2362	              if ('connected' == __unmatched_400.status) {
2363	                UpdateScale(__unmatched_400);
2364	              } else {
2365	                __unmatched_398();
2366	              }
2367	            }
2368	          });
2369	          window.facebookLogin = __unmatched_398;
2370	        };
2371	        window.logout = function() {
2372	          __unmatched_110 = null;
2373	          $('#helloContainer').attr('data-logged-in', '0');
2374	          $('#helloContainer').attr('data-has-account-data', '0');
2375	          delete window.localStorage.wannaLogin;
2376	          delete window.localStorage[i_];
2377	          delete window.localStorage.fbPictureCache;
2378	          Start();
2379	        };
2380	        var __unmatched_143 = function() {
2381	          function ParseString(width, top, callback, height, left) {
2382	            var __unmatched_415 = top.getContext('2d');
2383	            var __unmatched_416 = top.width;
2384	            top = top.height;
2385	            width.color = left;
2386	            width.t(callback);
2387	            width.size = height;
2388	            __unmatched_415.save();
2389	            __unmatched_415.translate(__unmatched_416 / 2, top / 2);
2390	            width.s(__unmatched_415);
2391	            __unmatched_415.restore();
2392	          }
2393	          for (var __unmatched_402 = new Cell(-1, 0, 0, 32, '#5bc0de', ''), __unmatched_403 = new Cell(-1, 0, 0, 32, '#5bc0de', ''), __unmatched_404 = '#0791ff #5a07ff #ff07fe #ffa507 #ff0774 #077fff #3aff07 #ff07ed #07a8ff #ff076e #3fff07 #ff0734 #07ff20 #ff07a2 #ff8207 #07ff0e'.split(' '), g_skinNamesC = [], j = 0; j < __unmatched_404.length; ++j) {
2394	            var sub = j / __unmatched_404.length * 12;
2395	            var __unmatched_408 = 30 * Math.sqrt(j / __unmatched_404.length);
2396	            g_skinNamesC.push(new Cell(-1, Math.cos(sub) * __unmatched_408, Math.sin(sub) * __unmatched_408, 10, __unmatched_404[j], ''));
2397	          }
2398	          __unmatched_43(g_skinNamesC);
2399	          var data = document.createElement('canvas');
2400	          data.getContext('2d');
2401	          data.width = data.height = 70;
2402	          ParseString(__unmatched_403, data, '', 26, '#ebc0de');
2403	          return function() {
2404	            $('.cell-spinner').filter(':visible').each(function() {
2405	              var __unmatched_417 = $(this);
2406	              var g = Date.now();
2407	              var width = this.width;
2408	              var __unmatched_420 = this.height;
2409	              var item = this.getContext('2d');
2410	              item.clearRect(0, 0, width, __unmatched_420);
2411	              item.save();
2412	              item.translate(width / 2, __unmatched_420 / 2);
2413	              for (var g_numFrames = 0; 10 > g_numFrames; ++g_numFrames) {
2414	                item.drawImage(data, (0.1 * g + 80 * g_numFrames) % (width + 140) - width / 2 - 70 - 35, __unmatched_420 / 2 * Math.sin((0.001 * g + g_numFrames) % Math.PI * 2) - 35, 70, 70);
2415	              }
2416	              item.restore();
2417	              if (__unmatched_417 = __unmatched_417.attr('data-itr')) {
2418	                __unmatched_417 = Render(__unmatched_417);
2419	              }
2420	              ParseString(__unmatched_402, this, __unmatched_417 || '', +$(this).attr('data-size'), '#5bc0de');
2421	            });
2422	            $('#statsPellets').filter(':visible').each(function() {
2423	              $(this);
2424	              var height = this.width;
2425	              var __unmatched_424 = this.height;
2426	              this.getContext('2d').clearRect(0, 0, height, __unmatched_424);
2427	              for (height = 0; height < g_skinNamesC.length; height++) {
2428	                ParseString(g_skinNamesC[height], this, '', g_skinNamesC[height].size, g_skinNamesC[height].color);
2429	              }
2430	            });
2431	          };
2432	        }();
2433	        window.createParty = function() {
2434	          n(':party');
2435	          __unmatched_126 = function(rect) {
2436	            __unmatched_49('/#' + window.encodeURIComponent(rect));
2437	            $('.partyToken').val('agar.io/#' + window.encodeURIComponent(rect));
2438	            $('#helloContainer').attr('data-party-state', '1');
2439	          };
2440	          Start();
2441	        };
2442	        window.joinParty = RenderLoop;
2443	        window.cancelParty = function() {
2444	          __unmatched_49('/');
2445	          $('#helloContainer').attr('data-party-state', '0');
2446	          n('');
2447	          Start();
2448	        };
2449	        var points = [];
2450	        var __unmatched_145 = 0;
2451	        var __unmatched_146 = '#000000';
2452	        var __unmatched_147 = false;
2453	        var __unmatched_148 = false;
2454	        var __unmatched_149 = 0;
2455	        var __unmatched_150 = 0;
2456	        var __unmatched_151 = 0;
2457	        var __unmatched_152 = 0;
2458	        var g_mode = 0;
2459	        var __unmatched_154 = true;
2460	        setInterval(function() {
2461	          if (__unmatched_148) {
2462	            points.push(__unmatched_37() / 100);
2463	          }
2464	        }, 1000 / 60);
2465	        setInterval(function() {
2466	          var start = __unmatched_52();
2467	          if (0 != start) {
2468	            ++__unmatched_151;
2469	            if (0 == g_mode) {
2470	              g_mode = start;
2471	            }
2472	            g_mode = Math.min(g_mode, start);
2473	          }
2474	        }, 1000);
2475	        window.closeStats = function() {
2476	          __unmatched_147 = false;
2477	          $('#stats').hide();
2478	          __unmatched_14(window.ab);
2479	          __unmatched_10(0);
2480	        };
2481	        window.setSkipStats = function(__unmatched_427) {
2482	          __unmatched_154 = !__unmatched_427;
2483	        };
2484	        $(function() {
2485	          $(Init);
2486	        });
2487	      }
2488	    }
2489	  }
2490	}(unsafeWindow, unsafeWindow.jQuery));
