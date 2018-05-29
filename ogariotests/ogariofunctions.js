var _0x1759 = ['nickSize', ... 'nickScale', 'massScale'];
(function(_0x63d4a7, _0x4955ab) {
  var _0x4bf5cc = function(_0x3feb15) {
    while (--_0x3feb15) {
      _0x63d4a7.push(_0x63d4a7.shift());
    }
  };
  var _0x209580 = function() {
    var _0x2014fc = {
      'data': {
        'key': 'cookie',
        'value': 'timeout'
      },
      'setCookie': function(_0x38f835, _0x2ea551, _0x19ec2c, _0x2e8f6f) {
        _0x2e8f6f = _0x2e8f6f || {};
        var _0x220a01 = _0x2ea551 + '=' + _0x19ec2c;
        var _0x5a9938 = 0x0;
        for (var _0x5a9938 = 0x0, _0x7d5218 = _0x38f835.length; _0x5a9938 < _0x7d5218; _0x5a9938++) {
          var _0x1973d8 = _0x38f835[_0x5a9938];
          _0x220a01 += '; ' + _0x1973d8;
          var _0x213892 = _0x38f835[_0x1973d8];
          _0x38f835.push(_0x213892);
          _0x7d5218 = _0x38f835.length;
          if (_0x213892 !== !![]) {
            _0x220a01 += '=' + _0x213892;
          }
        }
        _0x2e8f6f.cookie = _0x220a01;
      },
      'removeCookie': function() {
        return 'dev';
      },
      'getCookie': function(_0x6b2a7e, _0x26db05) {
        _0x6b2a7e = _0x6b2a7e || function(_0x3bb48c) {
          return _0x3bb48c;
        };
        var _0xaf983e = _0x6b2a7e(new RegExp('(?:^|; )' + _0x26db05.replace(/([.$?*|{}()[]\/+^])/g, '$1') + '=([^;]*)'));
        var _0x40f3d6 = function(_0xa54f0e, _0x5613cf) {
          _0xa54f0e(++_0x5613cf);
        };
        _0x40f3d6(_0x4bf5cc, _0x4955ab);
        return _0xaf983e ? decodeURIComponent(_0xaf983e[0x1]) : undefined;
      }
    };
    var _0x31f8f8 = function() {
      var _0xdde3a8 = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
      return _0xdde3a8.test(_0x2014fc.removeCookie.toString());
    };
    _0x2014fc.updateCookie = _0x31f8f8;
    var _0x2ad50b = '';
    var _0x27db1d = true; // _0x2014fc.updateCookie();
    if (!_0x27db1d) {
      _0x2014fc.setCookie(['*'], 'counter', 0x1);
    } else if (_0x27db1d) {
      _0x2ad50b = _0x2014fc.getCookie(null, 'counter');
    } else {
      _0x2014fc.removeCookie();
    }
  };
  _0x209580();
}(_0x1759, 0x1cd));
var _0x1af3 = function(_0x4706ff, _0x2ec06a) {
  _0x4706ff = _0x4706ff - 0x0;
  var _0x3b036c = _0x1759[_0x4706ff];
  return _0x3b036c;
};
! function(window, ogario, jQuery) {
  var _0x5b7c09 = function() {
    var _0xfd8642 = !![];
    return function(_0x14f95d, _0x2e1b62) {
      var _0x19c0f2 = _0xfd8642 ? function() {
        if (_0x2e1b62) {
          var _0x749c5 = _0x2e1b62.apply(_0x14f95d, arguments);
          _0x2e1b62 = null;
          return _0x749c5;
        }
      } : function() {};
      _0xfd8642 = ![];
      return _0x19c0f2;
    };
  }();
  var _0xf338cf = {
      'pl': {
        'start': "Start",
        'settings': "Ustawienia",
        'restoreSettings': "Przywróc ustawienia domyślne",
        'animationGroup': 'Animacja',
        'zoomGroup': "Zoom",
        'respGroup': 'Odrodzenie',
        'namesGroup': 'Nazwy',
        'massGroup': "Masa",
        'skinsGroup': 'Skiny',
        'foodGroup': "Pokarm",
        'transparencyGroup': "Przezroczystość / kolory",
        'gridGroup': 'Siatka / sektory',
        'miniMapGroup': "Minimapa",
        'helpersGroup': "Wspomagacze",
        'mouseGroup': 'Sterowanie myszką',
        'hudGroup': "HUD",
        'chatGroup': "Czat",
        'statsGroup': "Statystyki",
        'extrasGroup': "Dodatkowe",
        'noSkins': "Wyłącz skiny",
        'noNames': "Wyłącz nazwy",
        'noColors': "Wyłącz kolory",
        'showMass': "Pokaż masę",
        'skipStats': "Pomiń statystyki po śmierci",
        'showQuest': "Pokaż zadanie (quest)",
        'playArenaSounds': "Dźwięki gry",
        'playMenuSounds': "Dźwięki menu",
        'autoZoom': "Auto zoom",
        'animation': "Opóźnienie animacji",
        'zoomSpeedValue': "Szybkość zoomu",
        'quickResp': "Szybkie odrodzenie (klawisz)",
        'autoResp': "Auto odrodzenie",
        'autoHideCellsInfo': "Autoukrywanie nazw i masy",
        'autoHideNames': "Autoukrywanie nazw",
        'autoHideMass': 'Autoukrywanie masy',
        'autoHideFood': "Autoukrywanie pokarmu (masa)",
        'autoHideFoodOnZoom': "Autoukrywanie pokarmu (zoom)",
        'optimizedNames': 'Zoptymalizowane nazwy',
        'hideMyName': "Ukryj własną nazwę",
        'hideTeammatesNames': "Ukryj nazwy graczy teamu",
        'optimizedMass': "Zoptymalizowana masa (+/-2%)",
        'shortMass': "Skrócona masa (k)",
        'virMassShots': 'Licznik strzałów (wirusy)',
        'hideMyMass': "Ukryj własną masę",
        'hideEnemiesMass': "Ukryj masę przeciwników",
        'vanillaSkins': 'Podstawowe skiny',
        'customSkins': "Własne skiny",
        'myTransparentSkin': 'Mój przezroczysty skin',
        'myCustomColor': "Mój własny kolor",
        'transparentCells': "Przezroczyste kulki",
        'transparentViruses': 'Przezroczyste wirusy',
        'transparentSkins': "Przezroczyste skiny",
        'showGrid': "Siatka",
        'showBgSectors': "Sektory w tle",
        'showMapBorders': "Granice mapy",
        'showMiniMap': "Pokaż minimapę",
        'showMiniMapGrid': "Pokaż siatkę minimapy",
        'showMiniMapGuides': "Pokaż prowadnice na minimapie",
        'oneColoredTeammates': "Jednokolorowi gracze",
        'optimizedFood': "Zoptymalizowany pokarm",
        'rainbowFood': "Kolorowy pokarm",
        'oppColors': 'Kolory przeciwników',
        'oppRings': "Ringi przeciwników",
        'virColors': "Kolory wirusów",
        'splitRange': "Zasięg podziału",
        'virusesRange': "Zasięg wirusów",
        'textStroke': "Obwódki nazw i masy",
        'namesStroke': "Obwódki nazw",
        'massStroke': "Obwódki masy",
        'cursorTracking': "Śledzenie kursora",
        'teammatesInd': "Wskaźniki graczy teamu",
        'mouseSplit': 'LPM - Split myszką',
        'mouseFeed': 'PPM - Feed myszką',
        'mouseInvert': "Odwróć klawisze myszki",
        'disableChat': 'Wyłącz czat',
        'hideChat': "Ukryj czat",
        'chatSounds': 'Powiadomienia dźwiękowe',
        'chatEmoticons': "Emotikony",
        'showChatImages': 'Pokaż obrazki na czacie',
        'showChatVideos': "Pokaż filmiki na czacie",
        'showChatBox': "Czatbox zamiast wyskakujących wiadomości",
        'messageSound': 'Dźwięk powiadomienia o wiadomości',
        'commandSound': "Dźwięk powiadomienia o komendzie",
        'showTop5': "Pokaż top 5 teamu",
        'showTargeting': "Pokaż namierzanie",
        'showTime': "Pokaż aktualny czas",
        'normalLb': "Nagłówek "Topka"",
        'centeredLb': "Wyśrodkowana topka",
        'fpsAtTop': "Statystyki na górze",
        'showStats': "Pokaż statystyki",
        'showStatsMass': "Statystyki: Masa",
        'showStatsSTE': 'Statystyki: STE',
        'showStatsN16': "Statystyki: n/16",
        'showStatsFPS': "Statystyki: FPS",
        'blockPopups': "Blokuj popupy (reklamy/sklep/zadanie)",
        'hotkeys': "Skróty klawiszowe",
        'hk-inst-assign': "Aby ustawić skrót klawiszowy kliknij na polu skrótu i naciśnij wybrany klawisz.",
        'hk-inst-delete': 'Aby usunąć skrót klawiszowy kliknij na polu skrótu i naciśnij klawisz DELETE.',
        'hk-inst-keys': "Możliwe kombinacje skrótów klawiszowych z użyciem klawiszy CTRL oraz ALT.",
        'hk-feed': 'Feed',
        'hk-macroFeed': "Szybki feed",
        'hk-split': "Podział",
        'hk-doubleSplit': "Podwójny podział",
        'hk-split16': "Podział na 16",
        'hk-pause': "Pauza kulki",
        'hk-showTop5': "Pokaż/ukryj top 5 teamu",
        'hk-showTime': "Pokaż/ukryj aktualny czas",
        'hk-showSplitRange': "Pokaż/ukryj zasięg podziału",
        'hk-showSplitInd': "Pokaż/ukryj zasięg podziału z ringami",
        'hk-showTeammatesInd': 'Pokaż/ukryj wskaźniki graczy teamu',
        'hk-showOppColors': 'Pokaż/ukryj kolory przeciwników',
        'hk-toggleSkins': "Przełącz skiny (własne/standardowe)",
        'hk-showSkins': "Pokaż/ukryj skiny",
        'hk-transparentSkins': "Włącz/wyłącz przezroczyste skiny",
        'hk-showStats': "Pokaż/ukryj statystyki gry",
        'hk-toggleCells': "Przełącz kulkę (najmniejsza/największa)",
        'hk-showFood': "Pokaż/ukryj pokarm",
        'hk-showGrid': 'Pokaż/ukryj siatkę',
        'hk-showMiniMapGuides': 'Pokaż/ukryj prowadnice na minimapie',
        'hk-hideChat': "Pokaż/ukryj czat",
        'hk-showHUD': 'Pokaż/ukryj HUD',
        'hk-copyLb': "Kopiuj topkę",
        'hk-showLb': 'Pokaż/ukryj topkę',
        'hk-toggleAutoZoom': "Włącz/wyłącz auto zoom",
        'hk-resetZoom': "Reset zoomu",
        'hk-zoomLevel': "Zoom - poziom",
        'hk-toggleDeath': 'Przełącz miejsce śmierci',
        'hk-clearChat': 'Pokaż historię czatu / Czyść czat',
        'hk-showBgSectors': "Pokaż/ukryj sektory w tle",
        'hk-hideBots': "Pokaż/ukryj małe boty",
        'hk-showNames': "Pokaż/ukryj nazwy",
        'hk-hideTeammatesNames': "Pokaż/ukryj nazwy graczy teamu",
        'hk-showMass': "Pokaż/ukryj masę",
        'hk-showMiniMap': "Pokaż/ukryj minimapę",
        'hk-chatMessage': 'Napisz wiadomość na czacie',
        'hk-quickResp': 'Szybkie odrodzenie (respawn)',
        'hk-autoResp': 'Włącz/wyłacz auto odrodzenie',
        'hk-switchServerMode': 'Przełącz serwer [publiczny/prywatny]',
        'hk-showTargeting': "Pokaż/ukryj panel namierzania",
        'hk-setTargeting': "Włącz/wyłącz namierzanie (śledzenie)",
        'hk-cancelTargeting': "Zatrzymaj namierzanie",
        'hk-changeTarget': "Zmień cel",
        'hk-privateMiniMap': "Pokaż cel na minimapie",
        'hk-showQuest': "Pokaż/ukryj zadanie",
        'commands': "Komendy",
        'comm1': "Feeduj!",
        'comm2': "Dziel się!",
        'comm3': 'Pomocy na %currentSector%!',
        'comm4': "Wróg na %currentSector%!",
        'comm5': "Zabij pomocnika!",
        'comm6': "Strzel z wirusa!",
        'comm7': "Zjedz wirusa!",
        'comm8': "Zjebałem, wybacz.",
        'comm9': "Ja pierdolę...",
        'comm0': "Kurwa mać!",
        'comm10': "Trick!",
        'comm11': "Lewo!",
        'comm12': 'Góra!',
        'comm13': "Prawo!",
        'comm14': 'Dół!',
        'saveComm': 'Zapisz komendy',
        'theme': "Wygląd",
        'restoreThemeSettings': "Przywróc ustawienia domyślne wyglądu",
        'basicTheming': "Podstawowy",
        'themePreset': 'Motyw',
        'themeType': 'Typ motywu',
        'darkTheme': "Ciemny motyw",
        'lightTheme': "Jasny motyw",
        'mainColor': "Kolor główny",
        'bgColor': "Tło",
        'bordersColor': 'Granice mapy',
        'gridColor': "Siatka",
        'sectorsColor': 'Czcionka sektorów',
        'namesColor': "Nazwy",
        'namesStrokeColor': "Obwódki nazw",
        'massColor': 'Masa',
        'massStrokeColor': "Obwódki masy",
        'virusColor': "Wirusy",
        'virusStrokeColor': 'Obwódki wirusów',
        'foodColor': 'Pokarm',
        'namesFont': 'Czcionka nazw',
        'massFont': 'Czcionka masy',
        'sectorsFont': "Czcionka sektorów",
        'namesScale': 'Skala nazw',
        'massScale': 'Skala masy',
        'virMassScale': 'Skala masy wirusów',
        'strokeScale': 'Skala obwódek tekstu',
        'foodSize': "Wielkość pokarmu",
        'bordersWidth': "Grubość granic mapy",
        'sectorsWidth': "Grubość siatki sektorów",
        'sectorsFontSize': "Rozmiar czcionki sektorów",
        'cellsAlpha': "Przezroczystość kulek",
        'skinsAlpha': "Przezroczystość skinów",
        'virusAlpha': 'Przezroczystość wirusów',
        'textAlpha': "Przezroczystość nazw i masy",
        'virusStrokeSize': "Grubość obwódki wirusów",
        'cursorTrackingColor': "Śledzenie kursora",
        'splitRangeColor': "Zasięg podziału",
        'teammatesIndColor': "Wskaźnik gracza",
        'menuTheming': 'Menu',
        'menuPreset': 'Motyw menu',
        'menuMainColor': "Kolor główny",
        'menuBtnTextColor': "Tekst przycisku",
        'menuPanelColor': "Panel",
        'menuPanelColor2': "Panel (2)",
        'menuTextColor': 'Tekst panelu',
        'menuTextColor2': "Tekst panelu (2)",
        'btn1Color': "Przycisk #1",
        'btn1Color2': "Przycisk #1 (2)",
        'btn2Color': 'Przycisk #2',
        'btn2Color2': 'Przycisk #2 (2)',
        'btn3Color': 'Przycisk #3',
        'btn3Color2': "Przycisk #3 (2)",
        'btn4Color': "Przycisk #4",
        'btn4Color2': "Przycisk #4 (2)",
        'menuBg': "Grafika tła panelu",
        'menuOpacity': 'Przezroczystość',
        'hudTheming': "HUD",
        'hudMainColor': "Kolor główny",
        'hudColor': "Tło",
        'hudTextColor': "Tekst",
        'statsHudColor': "Statystyki",
        'timeHudColor': 'Czas',
        'top5MassColor': "Masa w top 5",
        'lbMeColor': "Topka - ja",
        'lbTeammateColor': "Topka - team",
        'hudFont': "Czcionka HUD",
        'hudScale': "Skala HUD",
        'chatTheming': 'Czat',
        'messageColor': "Tło wiadomości",
        'messageTextColor': "Tekst wiadomości",
        'messageTimeColor': "Czas wiadomości",
        'messageNickColor': 'Nick wiadomości',
        'commandsColor': "Tło komendy",
        'commandsTextColor': "Tekst komendy",
        'commandsTimeColor': "Czas komendy",
        'commandsNickColor': "Nick komendy",
        'chatBoxColor': 'Tło czatboxu',
        'chatScale': 'Skala czatu',
        'miniMapTheming': 'Minimapa',
        'miniMapSectorsColor': "Sektory",
        'miniMapSectorColor': 'Aktualny sektor',
        'miniMapGuidesColor': "Prowadnice",
        'miniMapNickColor': "Nick",
        'miniMapNickStrokeColor': "Obwódka nicku",
        'miniMapMyCellColor': "Moja kulka",
        'miniMapMyCellStrokeColor': "Obwódka mojej kulki",
        'miniMapTeammatesColor': 'Gracze',
        'miniMapDeathLocationColor': "Miejsce śmierci",
        'miniMapFont': "Czcionka minimapy",
        'miniMapNickFont': "Czcionka nicku",
        'miniMapWidth': "Szerokość minimapy",
        'miniMapSectorsOpacity': 'Przezroczystość sektorów',
        'miniMapNickSize': "Rozmiar nicku",
        'miniMapNickStrokeSize': "Grubość obwódki nicku",
        'miniMapMyCellSize': "Wielkość mojej kulki",
        'miniMapMyCellStrokeSize': "Grubość obwódki mojej kulki",
        'miniMapTeammatesSize': "Wielkość graczy",
        'imagesTheming': "Grafika / kursory",
        'customBackground': "Grafika tła",
        'customCursor': "Grafika kursora",
        'hideChatMsgA': "Czat został włączony!",
        'hideChatMsgB': "Czat został ukryty!",
        'showSkinsMsgA': "Skiny zostały włączone!",
        'showSkinsMsgB': "Skiny zostały ukryte!",
        'hideSmallBotsMsgA': "Małe boty stały się widoczne!",
        'hideSmallBotsMsgB': "Małe boty zostały ukryte!",
        'autoRespMsgA': 'Auto odrodzenie zostało włączone!',
        'autoRespMsgB': 'Auto odrodzenie zostało wyłączone!',
        'autoZoomMsgA': "Auto zoom został włączony!",
        'autoZoomMsgB': 'Auto zoom został wyłączony!',
        'targetNotSet': "Brak celu",
        'targetDead': "Nie żyje",
        'targetDistance': "Dystans",
        'targetMass': "Masa razem",
        'totalPartyPlayers': "Aktywnych graczy",
        'totalPartyMass': "Łącznie masy",
        'exportImport': "Eksport / import ustawień",
        'exportSettings': "Eksportuj ustawienia",
        'exportInfo': "Aby wyeksportować wybrane ustawienia skopiuj poniższy kod i zapisz go w pliku tekstowym z kodowaniem Unicode.",
        'importSettings': "Importuj ustawienia",
        'importInfo': "Aby zaimportować wybrane ustawienia wklej poniżej wyeksportowany wcześniej kod i naciśnij przycisk "Importuj ustawienia".",
        'profile': "Profil",
        'profiles': 'Profile',
        'skins': "Skiny",
        'moreSkins': "Dodaj skiny",
        'thanks': 'Dzięki Awesome!',
        'saveSett': 'Zapisz ustawienia',
        'saved': "Zapisano!",
        'resetSett': 'Resetuj ustawienia',
        'close': "Zamknij",
        'enterChatMsg': "Napisz wiadomość",
        'activeParties': "Aktywne party",
        'noActiveParties': "Brak aktywnych party ;(",
        'playlist': "Playlista",
        'pause': 'PAUZA!',
        'visit': "Odwiedź",
        'exit': "OGARio by szymy: Czy na pewno chcesz opuścic grę?",
        'blockWarn': "UWAGA! Popupy zostały zablokowane w ustawieniach.",
        'unblockPopups': "Odblokuj tymczasowo",
        'mass': "Masa",
        'score': "Top",
        'leaderboard': "Topka",
        'user': "Użytkownik",
        'userMuted': "Użytkownik %user% został wyciszony.",
        'userUnmuted': "Wyłączono wyciszenie użytkownika %user%.",
        'mute': "Wycisz",
        'unmute': "Wyłącz wyciszenie",
        'mutedUsers': "Wyciszeni użytkownicy",
        'activeUsers': "Aktywni użytkownicy",
        'showActiveUsers': "Pokaż aktywnych użytkowników",
        'none': "Brak",
        'sounds': "Dźwięki",
        'page_back_button': "Wróć",
        'page_create_party': 'Stwórz party',
        'page_join_party': "Dołącz",
        'page_login_and_play': "Zaloguj",
        'page_logout': "Wyloguj",
        'page_menu_login_facebook': "Zaloguj z Facebook",
        'page_menu_login_google': "Zaloguj z Google",
        'page_menu_main_free_coins': "Darmowe Monety",
        'page_menu_main_gifts': 'Prezenty',
        'page_menu_main_dailyquests': "Zadania",
        'page_party_join_error': "Nie można dołączyć do tego party. Upewnij się, że token jest prawidłowy lub stwórz nowy.",
        'page_play': "Graj",
        'page_play_as_guest': "Graj jako gość",
        'page_shop': "Sklep",
        'page_spectate': "Obserwuj",
        'page_stats': "Statystyki"
      },
      'en': {
        'start': "Home",
        'settings': "Settings",
        'restoreSettings': "Restore default settings",
        'animationGroup': "Animation",
        'zoomGroup': "Zoom",
        'respGroup': "Respawn",
        'namesGroup': "Names",
        'massGroup': "Mass",
        'skinsGroup': "Skins",
        'foodGroup': "Food",
        'transparencyGroup': "Transparency / colors",
        'gridGroup': "Grid / sectors",
        'miniMapGroup': "Minimap",
        'helpersGroup': 'Helpers',
        'mouseGroup': "Mouse control",
        'hudGroup': "HUD",
        'chatGroup': "Chat",
        'statsGroup': "Stats",
        'extrasGroup': "Extras",
        'noSkins': "No skins",
        'noNames': "No names",
        'noColors': "No colors",
        'showMass': "Show mass",
        'skipStats': "Skip stats after death",
        'showQuest': "Show quest",
        'playArenaSounds': "Game sounds",
        'playMenuSounds': "Menu sounds",
        'autoZoom': "Auto zoom",
        'animation': "Animation delay",
        'zoomSpeedValue': "Zoom speed",
        'quickResp': "Quick respawn (hotkey)",
        'autoResp': "Auto respawn",
        'autoHideCellsInfo': "Auto hide names and mass",
        'autoHideNames': "Auto hide names",
        'autoHideMass': "Auto hide mass",
        'autoHideFood': 'Auto hide food (mass)',
        'autoHideFoodOnZoom': "Auto hide food (zoom)",
        'optimizedNames': "Optimized names",
        'hideMyName': "Hide my name",
        'hideTeammatesNames': "Hide teammates names",
        'optimizedMass': "Optimized mass (+/-2%)",
        'shortMass': "Short mass (k)",
        'virMassShots': "Virus shots",
        'hideMyMass': "Hide my mass",
        'hideEnemiesMass': 'Hide enemies mass',
        'vanillaSkins': "Vanilla skins",
        'customSkins': "Custom skins",
        'myTransparentSkin': "My transparent skin",
        'myCustomColor': "My custom color",
        'transparentCells': "Transparent cells",
        'transparentViruses': "Transparent viruses",
        'transparentSkins': "Transparent skins",
        'showGrid': "Show grid",
        'showBgSectors': "Show background sectors",
        'showMapBorders': "Show map borders",
        'showMiniMap': "Show minimap",
        'showMiniMapGrid': "Show minimap grid",
        'showMiniMapGuides': "Show minimap guides",
        'oneColoredTeammates': "One-colored teammates",
        'optimizedFood': "Optimized food",
        'rainbowFood': "Rainbow food",
        'oppColors': "Opponents colors",
        'oppRings': "Opponents rings",
        'virColors': 'Viruses colors',
        'splitRange': "Split range",
        'virusesRange': "Viruses range",
        'textStroke': "Names and mass stroke",
        'namesStroke': "Names stroke",
        'massStroke': "Mass stroke",
        'cursorTracking': "Cursor tracking",
        'teammatesInd': "Teammates indicators",
        'mouseSplit': 'LMB - Mouse split',
        'mouseFeed': "RMB - Mouse feed",
        'mouseInvert': "Invert mouse buttons",
        'disableChat': "Disable chat",
        'hideChat': "Hide chat",
        'chatSounds': "Sound notifications",
        'chatEmoticons': "Emoticons",
        'showChatImages': "Show images on chat",
        'showChatVideos': "Show videos on chat",
        'showChatBox': "Chatbox instead of popups",
        'messageSound': "Message notification sound",
        'commandSound': "Command notification sound",
        'showTop5': 'Show team top 5',
        'showTargeting': "Show targeting",
        'showTime': "Show current time",
        'normalLb': ""Leaderboard" header",
        'centeredLb': 'Centered leaderboard',
        'fpsAtTop': "Game stats at the top",
        'showStats': "Show game stats",
        'showStatsMass': "Game stats: Mass",
        'showStatsSTE': "Game stats: STE",
        'showStatsN16': "Game stats: n/16",
        'showStatsFPS': "Game stats: FPS",
        'blockPopups': 'Block popups (ads/shop/quest)',
        'hotkeys': "Hotkeys",
        'hk-inst-assign': "To assign a hotkey click on the input field and press your chosen key.",
        'hk-inst-delete': "To delete a hotkey click on the input field and press the DELETE key.",
        'hk-inst-keys': 'Possible key combinations with the CTRL and ALT keys.',
        'hk-feed': "Feed",
        'hk-macroFeed': "Macro feed",
        'hk-split': 'Split',
        'hk-doubleSplit': "Double split",
        'hk-split16': "Split 16",
        'hk-pause': "Cell pause",
        'hk-showTop5': "Show/hide team top 5",
        'hk-showTime': 'Show/hide current time',
        'hk-showSplitRange': "Show/hide split range",
        'hk-showSplitInd': "Show/hide split indicators",
        'hk-showTeammatesInd': "Show/hide teammates indicators",
        'hk-showOppColors': "Show/hide opponents colors",
        'hk-toggleSkins': "Toggle skins (custom/default)",
        'hk-showSkins': "Show/hide skins",
        'hk-transparentSkins': 'Toggle transparent skins',
        'hk-showStats': "Show/hide game stats",
        'hk-toggleCells': "Toggle own cells (smallest/biggest)",
        'hk-showFood': "Show/hide food",
        'hk-showGrid': 'Show/hide grid',
        'hk-showMiniMapGuides': 'Show/hide minimap guides',
        'hk-hideChat': "Show/hide chat",
        'hk-showHUD': "Show/hide HUD",
        'hk-copyLb': "Copy leaderboard",
        'hk-showLb': 'Show/hide leaderboard',
        'hk-toggleAutoZoom': "Toggle auto zoom",
        'hk-resetZoom': 'Reset zoom',
        'hk-zoomLevel': "Zoom level",
        'hk-toggleDeath': "Toggle death location",
        'hk-clearChat': "Show chat history / Clear chat",
        'hk-showBgSectors': "Show/hide background sectors",
        'hk-hideBots': 'Show/hide small bots',
        'hk-showNames': "Show/hide names",
        'hk-hideTeammatesNames': "Show/hide teammates names",
        'hk-showMass': "Show/hide mass",
        'hk-showMiniMap': 'Show/hide minimap',
        'hk-chatMessage': "Enter chat message",
        'hk-quickResp': "Quick respawn",
        'hk-autoResp': "Toggle auto respawn",
        'hk-switchServerMode': "Switch server [public/private]",
        'hk-showTargeting': "Show/hide targeting panel",
        'hk-setTargeting': "Start/stop targeting (following)",
        'hk-cancelTargeting': "Cancel targeting",
        'hk-changeTarget': "Change target",
        'hk-privateMiniMap': "Show target on the minimap",
        'hk-showQuest': "Show/hide quest",
        'commands': "Commands",
        'comm1': 'Feed me!',
        'comm2': "Split into me!",
        'comm3': "Need backup at %currentSector%!",
        'comm4': "Enemy spotted at %currentSector%!",
        'comm5': "Need a teammate!",
        'comm6': 'Tank the virus!',
        'comm7': "Eat the virus!",
        'comm8': "Let's bait!",
        'comm9': "Fake tricksplit!",
        'comm0': "Fuck!",
        'comm10': "Tricksplit!",
        'comm11': 'Left!',
        'comm12': 'Up!',
        'comm13': "Right!",
        'comm14': "Bottom!",
        'saveComm': "Save commands",
        'theme': "Theme",
        'restoreThemeSettings': 'Restore theme default settings',
        'basicTheming': "Basic theming",
        'themePreset': "Theme preset",
        'themeType': "Theme type",
        'darkTheme': "Dark theme",
        'lightTheme': "Light theme",
        'mainColor': "Main color",
        'bgColor': "Background",
        'bordersColor': 'Map borders',
        'gridColor': "Grid",
        'sectorsColor': "Sectors font",
        'namesColor': 'Names',
        'namesStrokeColor': "Names stroke",
        'massColor': "Mass",
        'massStrokeColor': "Mass stroke",
        'virusColor': 'Virus',
        'virusStrokeColor': 'Virus stroke',
        'foodColor': "Food",
        'namesFont': "Names font",
        'massFont': 'Mass font',
        'sectorsFont': 'Sectors font',
        'namesScale': 'Names scale',
        'massScale': "Mass scale",
        'virMassScale': 'Virus mass scale',
        'strokeScale': "Text stroke scale",
        'foodSize': "Food size",
        'bordersWidth': "Map borders width",
        'sectorsWidth': 'Sectors grid width',
        'sectorsFontSize': "Sectors font size",
        'cellsAlpha': "Cells transparency",
        'skinsAlpha': "Skins transparency",
        'virusAlpha': "Virus transparency",
        'textAlpha': 'Names & mass transparency',
        'virusStrokeSize': "Virus stroke size",
        'cursorTrackingColor': "Cursor tracking",
        'splitRangeColor': "Split range",
        'teammatesIndColor': "Teammate indicator",
        'menuTheming': "Menu",
        'menuPreset': "Menu theme",
        'menuMainColor': 'Main color',
        'menuBtnTextColor': "Button text",
        'menuPanelColor': "Panel",
        'menuPanelColor2': "Panel (2)",
        'menuTextColor': "Panel text",
        'menuTextColor2': "Panel text (2)",
        'btn1Color': "Button #1",
        'btn1Color2': "Button #1 (2)",
        'btn2Color': "Button #2",
        'btn2Color2': "Button #2 (2)",
        'btn3Color': 'Button #3',
        'btn3Color2': "Button #3 (2)",
        'btn4Color': "Button #4",
        'btn4Color2': "Button #4 (2)",
        'menuBg': "Panel background image",
        'menuOpacity': "Transparency",
        'hudTheming': "HUD",
        'hudMainColor': "Main color",
        'hudColor': "Background",
        'hudTextColor': "Text",
        'statsHudColor': "Stats",
        'timeHudColor': "Time",
        'top5MassColor': "Top 5 mass",
        'lbMeColor': "Leaderboard - me",
        'lbTeammateColor': "Leaderboard - teammate",
        'hudFont': "HUD font",
        'hudScale': "HUD scale",
        'chatTheming': "Chat",
        'messageColor': "Message background",
        'messageTextColor': "Message text",
        'messageTimeColor': "Message time",
        'messageNickColor': "Message nick",
        'commandsColor': 'Command background',
        'commandsTextColor': "Command text",
        'commandsTimeColor': "Command time",
        'commandsNickColor': "Command nick",
        'chatBoxColor': "Chatbox color",
        'chatScale': 'Chat scale',
        'miniMapTheming': "Minimap",
        'miniMapSectorsColor': "Sectors",
        'miniMapSectorColor': 'Current sector',
        'miniMapGuidesColor': "Guides",
        'miniMapNickColor': "Nick",
        'miniMapNickStrokeColor': "Nick stroke",
        'miniMapMyCellColor': "My cell",
        'miniMapMyCellStrokeColor': "My cell stroke",
        'miniMapTeammatesColor': "Teammates",
        'miniMapDeathLocationColor': "Death location",
        'miniMapFont': "Minimap font",
        'miniMapNickFont': "Nick font",
        'miniMapWidth': "Minimap width",
        'miniMapSectorsOpacity': "Sectors transparency",
        'miniMapNickSize': 'Nick size',
        'miniMapNickStrokeSize': "Nick stroke size",
        'miniMapMyCellSize': "My cell size",
        'miniMapMyCellStrokeSize': 'My cell stroke size',
        'miniMapTeammatesSize': 'Teammates size',
        'imagesTheming': "Graphics / cursors",
        'customBackground': "Custom background image",
        'customCursor': "Custom cursor image",
        'hideChatMsgA': 'Chat is visible!',
        'hideChatMsgB': 'Chat is hidden!',
        'showSkinsMsgA': "Skins are visible!",
        'showSkinsMsgB': "Skins are hidden!",
        'hideSmallBotsMsgA': "Small bots are visible!",
        'hideSmallBotsMsgB': "Small bots are hidden!",
        'autoRespMsgA': "Auto respawn is on!",
        'autoRespMsgB': "Auto respawn is off!",
        'autoZoomMsgA': "Auto zoom is on!",
        'autoZoomMsgB': "Auto zoom is off!",
        'targetNotSet': 'Target not set',
        'targetDead': "Dead",
        'targetDistance': "Distance",
        'targetMass': "Mass altogether",
        'totalPartyPlayers': "Active players",
        'totalPartyMass': "Total mass",
        'exportImport': "Export / import settings",
        'exportSettings': "Export settings",
        'exportInfo': "To export selected settings copy the code below and save it to a text file encoded in Unicode.",
        'importSettings': "Import settings",
        'importInfo': "To import selected settings paste an exported code below and press the "Import settings" button.",
        'profile': "Profile",
        'profiles': "Profiles",
        'skins': "Skins",
        'moreSkins': "Add skins",
        'thanks': "Thanks to Awesome!",
        'saveSett': "Save settings",
        'saved': "Saved!",
        'resetSett': "Reset to default",
        'close': 'Close',
        'enterChatMsg': "Enter chat message",
        'activeParties': "Active parties",
        'noActiveParties': "No active parties ;(",
        'playlist': "Playlist",
        'pause': 'PAUSE!',
        'visit': 'Visit',
        'exit': 'OGARio by szymy: Are you sure you want to quit the game?',
        'blockWarn': "WARNING! Popups are blocked in the settings.",
        'unblockPopups': "Temporary unblock",
        'mass': "Mass",
        'score': "Score",
        'leaderboard': "Leaderboard",
        'user': "User",
        'userMuted': "User %user% has been muted.",
        'userUnmuted': "User %user% has been unmuted.",
        'mute': "Mute",
        'unmute': "Unmute",
        'mutedUsers': "Muted users",
        'activeUsers': "Active users",
        'showActiveUsers': "Show active users",
        'none': "None",
        'sounds': "Sounds",
        'page_menu_main_free_coins': 'Free Coins',
        'page_menu_main_gifts': "Gifts",
        'page_menu_main_dailyquests': "Daily Quest",
        'page_shop': "Shop"
      }
    },
    _0x50a51f = 'en',
    _0x1673a4 = window.navigator.language || window.navigator.userLanguage;
  _0x1673a4 && _0xf338cf.hasOwnProperty(_0x1673a4) && (_0x50a51f = _0x1673a4);
  var _0x5a1e0a = _0xf338cf[_0x50a51f],
    _0x5c099a = {
      'comm1': _0x5a1e0a.comm1,
      'comm2': _0x5a1e0a.comm2,
      'comm3': _0x5a1e0a.comm3,
      'comm4': _0x5a1e0a.comm4,
      'comm5': _0x5a1e0a.comm5,
      'comm6': _0x5a1e0a.comm6,
      'comm7': _0x5a1e0a.comm7,
      'comm8': _0x5a1e0a.comm8,
      'comm9': _0x5a1e0a.comm9,
      'comm0': _0x5a1e0a.comm0,
      'comm10': _0x5a1e0a.comm10,
      'comm11': _0x5a1e0a.comm11,
      'comm12': _0x5a1e0a.comm12,
      'comm13': _0x5a1e0a.comm13,
      'comm14': _0x5a1e0a.comm14
    },
    _0x315c0c = {
      '&': '&amp;',
      '<': "&lt;",
      '>': '&gt;',
      '"': '&quot;',
      '\'': "&#39;",
      '/': "&#x2F;"
    },
    _0x44408e = {
      ':)': "smile.svg",
      ';)': "wink.svg",
      '=)': "smirk.svg",
      ':D': "grin.svg",
      'X-D': "xgrin.svg",
      '=D': "joy.svg",
      ':(': "sad.svg",
      ';(': "cry.svg",
      ':P': "tongue.svg",
      ';P': "tonguew.svg",
      ':*': "kiss.svg",
      '$)': 'smileh.svg',
      '<3': "heart.svg",
      '8=)': "cool.svg",
      ':o': "astonished.svg",
      '(:|': "sweat.svg",
      ':|': "neutral.svg",
      ':\\': "unamused.svg",
      ':@': "pouting.svg",
      '|-)': "sleep.svg",
      '^_^': "relaxed.svg",
      '-_-': 'expressionless.svg',
      '$_$': "money.svg",
      'O:)': "angel.svg",
      '3:)': 'devil.svg',
      '(poop)': 'poo.svg',
      '(fuck)': "finger.svg",
      '(clap)': 'clap.svg',
      '(ok)': "ok.svg",
      '(victory)': 'victory.svg',
      '(y)': "thumb.svg",
      '(n)': 'thumbd.svg'
    },
    _0x528e70 = {
      'ogario-v3': {
        'name': "OGARio v3",
        'darkTheme': !0x0,
        'mainColor': '#01d9cc',
        'bgColor': "#000a11",
        'bordersColor': "#01d9cc",
        'gridColor': '#00243e',
        'sectorsColor': "#00243e",
        'namesColor': "#ffffff",
        'namesStrokeColor': "#000000",
        'massColor': "#ffffff",
        'massStrokeColor': "#000000",
        'virusColor': "#002f52",
        'virusStrokeColor': "#00b9e8",
        'foodColor': "#5000ff",
        'teammatesIndColor': "#ffffff",
        'cursorTrackingColor': '#ffffff',
        'splitRangeColor': '#ffffff',
        'namesFont': "ubuntu-bold",
        'massFont': "ubuntu-bold",
        'sectorsFont': "ubuntu",
        'namesScale': 0x1,
        'massScale': 0x3,
        'foodSize': 0x5,
        'bordersWidth': 0x28,
        'sectorsWidth': 0x28,
        'sectorsFontSize': 0x4b0,
        'cellsAlpha': 0.9,
        'skinsAlpha': 0.7,
        'virusAlpha': 0.6,
        'textAlpha': 0x1,
        'virusStrokeSize': 0xe,
        'menuPreset': 'ogario-v3',
        'menuMainColor': "#01d9cc",
        'menuBtnTextColor': "#ffffff",
        'menuPanelColor': "#00243e",
        'menuPanelColor2': "#002f52",
        'menuTextColor': "#ffffff",
        'menuTextColor2': '#8096a7',
        'btn1Color': '#018cf6',
        'btn1Color2': "#0176ce",
        'btn2Color': "#00b9e8",
        'btn2Color2': "#0099c0",
        'btn3Color': '#8d5fe6',
        'btn3Color2': "#814ee3",
        'btn4Color': "#bf00aa",
        'btn4Color2': "#a80096",
        'menuBg': "http://cdn.ogario.ovh/static/img/pattern.png",
        'menuOpacity': 0.96,
        'hudMainColor': "#01d9cc",
        'hudColor': "rgba(0,0,0,0.4)",
        'hudTextColor': "#ffffff",
        'statsHudColor': "#ffffff",
        'timeHudColor': "#01d9cc",
        'top5MassColor': "#bf00aa",
        'lbMeColor': "#bf00aa",
        'lbTeammateColor': '#018cf6',
        'hudFont': "ubuntu-bold",
        'hudScale': 0x1,
        'messageColor': "rgba(0,0,0,0.4)",
        'messageTextColor': "#ffffff",
        'messageTimeColor': "#018cf6",
        'messageNickColor': "#01d9cc",
        'commandsColor': "rgba(191,0,170,0.9)",
        'commandsTextColor': "#ffffff",
        'commandsTimeColor': "#bf00aa",
        'commandsNickColor': "#ffffff",
        'chatBoxColor': "rgba(0,0,0,0.4)",
        'chatScale': 0x1,
        'miniMapSectorsColor': "#ffffff",
        'miniMapSectorColor': "#01d9cc",
        'miniMapGuidesColor': "#bf00aa",
        'miniMapNickColor': "#ffffff",
        'miniMapNickStrokeColor': "#000000",
        'miniMapMyCellColor': "#ffffff",
        'miniMapMyCellStrokeColor': "#bf00aa",
        'miniMapTeammatesColor': "#01d9cc",
        'miniMapDeathLocationColor': "#bf00aa",
        'miniMapFont': "ubuntu-bold",
        'miniMapNickFont': 'ubuntu-bold',
        'miniMapWidth': 0xf0,
        'miniMapSectorsOpacity': 0.1,
        'miniMapNickSize': 0xb,
        'miniMapNickStrokeSize': 0x2,
        'miniMapMyCellSize': 7.5,
        'miniMapMyCellStrokeSize': 0x4,
        'miniMapTeammatesSize': 5.5,
        'customBackground': '',
        'customCursor': "http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur"
      },
      'ogario-orange': {
        'name': "OGARio v2",
        'darkTheme': !0x0,
        'mainColor': "#ff7800",
        'bgColor': "#111111",
        'bordersColor': "#ff7800",
        'gridColor': '#292929',
        'sectorsColor': "#292929",
        'namesColor': "#ffffff",
        'namesStrokeColor': "#000000",
        'massColor': "#ffffff",
        'massStrokeColor': "#000000",
        'virusColor': "#666666",
        'virusStrokeColor': "#666666",
        'foodColor': "#e16400",
        'hudMainColor': "#ff7800",
        'statsHudColor': "#ff7800",
        'top5MassColor': "#ff7800",
        'timeHudColor': '#ff7800',
        'messageNickColor': "#ff7800",
        'commandsColor': "rgba(255,120,0,0.9)",
        'commandsTimeColor': "#ff7800",
        'commandsTextColor': "#ffffff",
        'miniMapSectorsColor': '#ffffff',
        'miniMapSectorColor': "#ff7800",
        'miniMapGuidesColor': "#ff7800",
        'miniMapMyCellColor': "#ffffff",
        'miniMapMyCellStrokeColor': '#ff7800',
        'miniMapTeammatesColor': '#ff7800',
        'miniMapDeathLocationColor': "#ff7800",
        'miniMapSectorsOpacity': 0.1
      },
      'ogario-gold': {
        'name': "OGARio LE",
        'darkTheme': !0x0,
        'mainColor': '#b5a642',
        'bgColor': "#000000",
        'bordersColor': "#b5a642",
        'gridColor': "#111111",
        'sectorsColor': '#111111',
        'namesColor': "#ffffff",
        'namesStrokeColor': '#000000',
        'massColor': "#ffffff",
        'massStrokeColor': "#000000",
        'virusColor': "#666666",
        'virusStrokeColor': "#666666",
        'foodColor': "#998c36",
        'hudMainColor': "#b5a642",
        'statsHudColor': "#b5a642",
        'top5MassColor': "#b5a642",
        'timeHudColor': '#b5a642',
        'messageNickColor': "#b5a642",
        'commandsColor': 'rgba(181,166,66,0.9)',
        'commandsTimeColor': "#b5a642",
        'commandsTextColor': "#ffffff",
        'miniMapSectorsColor': '#ffffff',
        'miniMapSectorColor': "#b5a642",
        'miniMapGuidesColor': "#b5a642",
        'miniMapMyCellColor': "#ffffff",
        'miniMapMyCellStrokeColor': "#b5a642",
        'miniMapTeammatesColor': '#b5a642',
        'miniMapDeathLocationColor': '#b5a642',
        'miniMapSectorsOpacity': 0.1
      },
      'sniikz-style': {
        'name': "SniiKz's Style",
        'darkTheme': !0x0,
        'mainColor': "#01d9cc",
        'bgColor': "#000000",
        'bordersColor': "#ffffff",
        'gridColor': "#00243e",
        'sectorsColor': "#00243e",
        'namesColor': "#ffffff",
        'namesStrokeColor': "#000000",
        'massColor': "#ffffff",
        'massStrokeColor': "#000000",
        'virusColor': "#3b3b3b",
        'virusStrokeColor': '#ffffff',
        'foodColor': "#5000ff",
        'teammatesIndColor': "#ffffff",
        'cursorTrackingColor': "#ffffff",
        'splitRangeColor': "#ffffff",
        'massScale': 0x4,
        'foodSize': 0x1,
        'bordersWidth': 0x28,
        'sectorsWidth': 0x28,
        'sectorsFontSize': 0x4b0,
        'cellsAlpha': 0.99,
        'skinsAlpha': 0.7,
        'virusAlpha': 0.4,
        'virusStrokeSize': 0xa,
        'menuPreset': "ogario-v3",
        'menuMainColor': "#fc0079",
        'menuBtnTextColor': "#ffffff",
        'menuPanelColor': '#050008',
        'menuPanelColor2': "#1d0526",
        'menuTextColor': "#ffffff",
        'menuTextColor2': '#65458f',
        'btn1Color': "#4f0242",
        'btn1Color2': "#3b0431",
        'btn2Color': "#6b0036",
        'btn2Color2': "#4d0227",
        'btn3Color': "#aa084e",
        'btn3Color2': "#80063b",
        'btn4Color': "#aa084e",
        'btn4Color2': "#8a063f",
        'menuBg': 'http://cdn.ogario.ovh/static/img/pattern.png',
        'menuOpacity': 0x1,
        'hudMainColor': "#5974ff",
        'hudColor': "rgba(36,36,36,0.49)",
        'hudTextColor': '#ffffff',
        'statsHudColor': "#ffffff",
        'timeHudColor': "#737373",
        'top5MassColor': "#1fe000",
        'lbMeColor': '#bf00aa',
        'lbTeammateColor': "#018cf6",
        'hudScale': 1.15,
        'messageColor': "rgba(0,0,0,0.4)",
        'messageTextColor': "#e8e8e8",
        'messageTimeColor': "#545454",
        'messageNickColor': "#05ff00",
        'commandsColor': 'rgba(36,36,36,0.9)',
        'commandsTextColor': "#ffffff",
        'commandsTimeColor': "#545454",
        'commandsNickColor': '#ffffff',
        'chatBoxColor': "rgba(0,0,0,0.4)",
        'chatScale': 0x1,
        'miniMapSectorsColor': "#ffffff",
        'miniMapSectorColor': "#000000",
        'miniMapGuidesColor': "#ff00a8",
        'miniMapNickColor': "#ffffff",
        'miniMapNickStrokeColor': "#4d4d4d",
        'miniMapMyCellColor': '#f0ff3d',
        'miniMapMyCellStrokeColor': "#acba07",
        'miniMapTeammatesColor': "#305eff",
        'miniMapDeathLocationColor': "#2b2b2b",
        'miniMapWidth': 0xfa,
        'miniMapSectorsOpacity': 0.1,
        'miniMapNickSize': 0x9,
        'miniMapNickStrokeSize': 0x0,
        'miniMapMyCellSize': 0x5,
        'miniMapMyCellStrokeSize': 0x0,
        'miniMapTeammatesSize': 0x5,
        'customBackground': '',
        'customCursor': "http://cdn.ogario.ovh/static/img/cursors/cursor_01.cur"
      },
      'hkg-style': {
        'name': "HKG Style",
        'darkTheme': !0x0,
        'mainColor': "#651fff",
        'bgColor': '#000000',
        'bordersColor': "#ffffff",
        'gridColor': "#111111",
        'sectorsColor': "#111111",
        'namesColor': "#ffffff",
        'namesStrokeColor': "#000000",
        'massColor': '#ffffff',
        'massStrokeColor': "#000000",
        'virusColor': "#666666",
        'virusStrokeColor': '#666666',
        'foodColor': "#651fff",
        'hudMainColor': "#651fff",
        'statsHudColor': "#651fff",
        'top5MassColor': "#651fff",
        'timeHudColor': "#651fff",
        'messageNickColor': "#651fff",
        'commandsColor': 'rgba(101,31,255,0.9)',
        'commandsTimeColor': "#651fff",
        'commandsTextColor': "#ffffff",
        'miniMapSectorsColor': "#ffffff",
        'miniMapSectorColor': "#651fff",
        'miniMapGuidesColor': "#651fff",
        'miniMapMyCellColor': "#ffffff",
        'miniMapMyCellStrokeColor': "#651fff",
        'miniMapTeammatesColor': '#651fff',
        'miniMapDeathLocationColor': "#651fff",
        'miniMapSectorsOpacity': 0.1
      },
      'agario-light': {
        'name': 'Agar.io Light',
        'darkTheme': !0x1,
        'mainColor': '#ffffff',
        'bgColor': '#f2fbff',
        'bordersColor': "#858a8c",
        'gridColor': '#ced6d9',
        'sectorsColor': "#ced6d9",
        'namesColor': "#ffffff",
        'namesStrokeColor': "#000000",
        'massColor': '#ffffff',
        'massStrokeColor': '#000000',
        'virusColor': "#33ff33",
        'virusStrokeColor': "#2de52d",
        'foodColor': "#2de52d",
        'hudMainColor': "#ffffff",
        'statsHudColor': "#ffffff",
        'top5MassColor': "#ffffff",
        'timeHudColor': "#ffffff",
        'messageNickColor': "#ffffff",
        'commandsColor': "rgba(255,255,255,0.9)",
        'commandsTimeColor': '#ffffff',
        'commandsTextColor': "#000000",
        'miniMapSectorsColor': "#ffffff",
        'miniMapSectorColor': "#ffffff",
        'miniMapGuidesColor': "#ffffff",
        'miniMapMyCellColor': "#ffffff",
        'miniMapMyCellStrokeColor': "#ffffff",
        'miniMapTeammatesColor': '#ffffff',
        'miniMapDeathLocationColor': "#ffffff",
        'miniMapSectorsOpacity': 0.25
      },
      'agario-dark': {
        'name': 'Agar.io Dark',
        'darkTheme': !0x0,
        'mainColor': "#ffffff",
        'bgColor': "#111111",
        'bordersColor': "#999999",
        'gridColor': "#333333",
        'sectorsColor': "#333333",
        'namesColor': "#ffffff",
        'namesStrokeColor': "#000000",
        'massColor': '#ffffff',
        'massStrokeColor': "#000000",
        'virusColor': "#33ff33",
        'virusStrokeColor': "#2de52d",
        'foodColor': "#2de52d",
        'hudMainColor': "#ffffff",
        'statsHudColor': "#ffffff",
        'top5MassColor': "#ffffff",
        'timeHudColor': '#ffffff',
        'messageNickColor': '#ffffff',
        'commandsColor': "rgba(255,255,255,0.9)",
        'commandsTimeColor': "#ffffff",
        'commandsTextColor': "#ffffff",
        'miniMapSectorsColor': "#ffffff",
        'miniMapSectorColor': "#ffffff",
        'miniMapGuidesColor': "#ffffff",
        'miniMapMyCellColor': "#ffffff",
        'miniMapMyCellStrokeColor': "#ffffff",
        'miniMapTeammatesColor': "#ffffff",
        'miniMapDeathLocationColor': '#ffffff',
        'miniMapSectorsOpacity': 0.1
      }
    },
    _0x2f7e5d = {
      'ogario-v3': {
        'name': 'OGARio v3',
        'menuMainColor': "#01d9cc",
        'menuBtnTextColor': '#ffffff',
        'menuPanelColor': "#00243e",
        'menuPanelColor2': '#002f52',
        'menuTextColor': "#ffffff",
        'menuTextColor2': "#8096a7",
        'btn1Color': '#018cf6',
        'btn1Color2': "#0176ce",
        'btn2Color': "#00b9e8",
        'btn2Color2': "#0099c0",
        'btn3Color': "#8d5fe6",
        'btn3Color2': "#814ee3",
        'btn4Color': "#f300d8",
        'btn4Color2': "#df00c6",
        'menuBg': "http://cdn.ogario.ovh/static/img/pattern.png"
      },
      'ogario-v2': {
        'name': "OGARio v2",
        'menuMainColor': "#ff7800",
        'menuBtnTextColor': "#ffffff",
        'menuPanelColor': '#222222',
        'menuPanelColor2': "#333333",
        'menuTextColor': "#bbbbbb",
        'menuTextColor2': "#bbbbbb",
        'btn1Color': "#428bca",
        'btn1Color2': "#3071a9",
        'btn2Color': "#5cb85c",
        'btn2Color2': '#449d44',
        'btn3Color': "#f0ad4e",
        'btn3Color2': '#ec971f',
        'btn4Color': "#d9534f",
        'btn4Color2': "#c9302c",
        'menuBg': ''
      },
      'agario': {
        'name': "Agar.io",
        'menuMainColor': "#5bc0de",
        'menuBtnTextColor': "#ffffff",
        'menuPanelColor': "#ffffff",
        'menuPanelColor2': '#cccccc',
        'menuTextColor': "#333333",
        'menuTextColor2': "#999999",
        'btn1Color': "#428bca",
        'btn1Color2': "#3071a9",
        'btn2Color': "#5cb85c",
        'btn2Color2': "#449d44",
        'btn3Color': "#f0ad4e",
        'btn3Color2': "#ec971f",
        'btn4Color': '#d9534f',
        'btn4Color2': "#c9302c",
        'menuBg': ''
      }
    },
    _0x39e92b = {
      'preset': "ogario-v3",
      'darkTheme': !0x0,
      'mainColor': "#01d9cc",
      'bgColor': "#000a11",
      'bordersColor': "#01d9cc",
      'gridColor': "#00243e",
      'sectorsColor': '#00243e',
      'namesColor': "#ffffff",
      'namesStrokeColor': "#000000",
      'massColor': "#ffffff",
      'massStrokeColor': "#000000",
      'virusColor': "#002f52",
      'virusStrokeColor': "#00b9e8",
      'foodColor': "#5000ff",
      'teammatesIndColor': "#ffffff",
      'cursorTrackingColor': "#ffffff",
      'splitRangeColor': "#ffffff",
      'namesFont': "ubuntu-bold",
      'namesFontFamily': "Ubuntu",
      'namesFontWeight': 0x2bc,
      'massFont': "ubuntu-bold",
      'massFontFamily': "Ubuntu",
      'massFontWeight': 0x2bc,
      'sectorsFont': 'ubuntu',
      'sectorsFontFamily': "Ubuntu",
      'sectorsFontWeight': 0x190,
      'sectorsX': 0x5,
      'sectorsY': 0x5,
      'namesScale': 0x1,
      'massScale': 0x3,
      'virMassScale': 0x3,
      'strokeScale': 0x1,
      'foodSize': 0x5,
      'bordersWidth': 0x28,
      'sectorsWidth': 0x28,
      'sectorsFontSize': 0x4b0,
      'cellsAlpha': 0.9,
      'skinsAlpha': 0.7,
      'virusAlpha': 0.6,
      'textAlpha': 0x1,
      'virusStrokeSize': 0xe,
      'menuPreset': 'ogario-v3',
      'menuMainColor': '#01d9cc',
      'menuBtnTextColor': "#ffffff",
      'menuPanelColor': '#00243e',
      'menuPanelColor2': "#002f52",
      'menuTextColor': "#ffffff",
      'menuTextColor2': "#8096a7",
      'btn1Color': "#018cf6",
      'btn1Color2': "#0176ce",
      'btn2Color': "#00b9e8",
      'btn2Color2': '#0099c0',
      'btn3Color': "#8d5fe6",
      'btn3Color2': "#814ee3",
      'btn4Color': "#bf00aa",
      'btn4Color2': "#a80096",
      'menuBg': "http://cdn.ogario.ovh/static/img/pattern.png",
      'menuOpacity': 0.96,
      'hudMainColor': "#01d9cc",
      'hudColor': 'rgba(0,0,0,0.4)',
      'hudTextColor': "#ffffff",
      'statsHudColor': '#ffffff',
      'timeHudColor': "#01d9cc",
      'top5MassColor': '#bf00aa',
      'lbMeColor': '#bf00aa',
      'lbTeammateColor': "#018cf6",
      'hudFont': "ubuntu-bold",
      'hudFontFamily': "Ubuntu",
      'hudFontWeight': 0x2bc,
      'hudScale': 0x1,
      'messageColor': 'rgba(0,0,0,0.4)',
      'messageTextColor': "#ffffff",
      'messageTimeColor': "#018cf6",
      'messageNickColor': "#01d9cc",
      'commandsColor': "rgba(191,0,170,0.9)",
      'commandsTextColor': "#ffffff",
      'commandsTimeColor': "#bf00aa",
      'commandsNickColor': "#ffffff",
      'chatBoxColor': "rgba(0,0,0,0.4)",
      'chatScale': 0x1,
      'miniMapSectorsColor': "#ffffff",
      'miniMapSectorColor': '#01d9cc',
      'miniMapGuidesColor': "#bf00aa",
      'miniMapNickColor': "#ffffff",
      'miniMapNickStrokeColor': '#000000',
      'miniMapMyCellColor': "#ffffff",
      'miniMapMyCellStrokeColor': "#bf00aa",
      'miniMapTeammatesColor': "#01d9cc",
      'miniMapDeathLocationColor': "#bf00aa",
      'miniMapFont': "ubuntu-bold",
      'miniMapFontFamily': "Ubuntu",
      'miniMapFontWeight': 0x2bc,
      'miniMapNickFont': 'ubuntu-bold',
      'miniMapNickFontFamily': "Ubuntu",
      'miniMapNickFontWeight': 0x2bc,
      'miniMapWidth': 0xf0,
      'miniMapTop': 0x18,
      'miniMapSectorsOpacity': 0.1,
      'miniMapNickSize': 0xb,
      'miniMapNickStrokeSize': 0x2,
      'miniMapMyCellSize': 7.5,
      'miniMapMyCellStrokeSize': 0x4,
      'miniMapTeammatesSize': 5.5,
      'customBackground': '',
      'customCursor': 'http://cdn.ogario.ovh/static/img/cursors/cursor_02.cur'
    },
    _0x45d8fa = {
      'menuMainColorCSS': null,
      'menuPanelColorCSS': null,
      'menuTextlColorCSS': null,
      'menuButtonsCSS': null,
      'hudCSS': null,
      'chatCSS': null,
      'chatScaleCSS': null,
      'cursorCSS': null,
      'loadThemeSettings': function() {
        var jQuery = null;
        for (var _0x2e4f6d in null !== window.localStorage.getItem("ogarioThemeSettings") && (jQuery = JSON.parse(window.localStorage.getItem("ogarioThemeSettings"))), _0x39e92b) _0x39e92b.hasOwnProperty(_0x2e4f6d) && (jQuery && jQuery.hasOwnProperty(_0x2e4f6d) && (_0x39e92b[_0x2e4f6d] = jQuery[_0x2e4f6d]), ogario.hasOwnProperty(_0x2e4f6d) && (ogario[_0x2e4f6d] = _0x39e92b[_0x2e4f6d]));
      },
      'saveThemeSettings': function() {
        window.localStorage.setItem("ogarioThemeSettings", JSON.stringify(_0x39e92b));
      },
      'restoreThemeSettings': function() {
        null !== window.localStorage.getItem("ogarioThemeSettings") && (window.localStorage.removeItem('ogarioThemeSettings'), window.location.reload());
      },
      'addCustomCSS': function(_0x506184, _0x249271) {
        this[_0x506184] || (this[_0x506184] = jQuery("<style type='text/css'>")['appendTo']("head")), this[_0x506184]["html"](_0x249271);
      },
      'addPresetBox': function(_0x52c46d, _0x38d34e, _0x4ac8f7, _0x5e89db, _0x219da1) {
        for (var _0x412c0b in jQuery(_0x52c46d)["append"]("<div class="preset-box"><span class="title-box">" + _0x5a1e0a[_0x38d34e] + "</span><div class="select-wrapper"><select id="" + _0x38d34e + "" class="form-control"></select></div></div>"), _0x4ac8f7) _0x4ac8f7.hasOwnProperty(_0x412c0b) && jQuery('#' + _0x38d34e)["append"]("<option value="" + _0x412c0b + '\">' + _0x4ac8f7[_0x412c0b]["name"] + "</option>");
        jQuery('#' + _0x38d34e)["val"](_0x39e92b[_0x5e89db]);
        var _0x1a249d = this;
        jQuery('#' + _0x38d34e)['on']("change", function() {
          var _0x52c46d = this.value;
          _0x39e92b[_0x5e89db] = _0x52c46d, _0x1a249d[_0x219da1](_0x52c46d);
        });
      },
      'addColorBox': function(_0x3873a7, _0x4d5832, _0x342b22) {
        if (jQuery(_0x3873a7)["append"]('<div class=\"color-box\"><span class=\"title-box\">' + _0x5a1e0a[_0x4d5832] + "</span><div class="input-group " + _0x4d5832 + "-picker"><input type="text" value="" + _0x39e92b[_0x4d5832] + "" id="" + _0x4d5832 + "" class="form-control" /><span class="input-group-addon"><i></i></span></div></div>"), _0x342b22) {
          var _0x3dac32 = this;
          jQuery(_0x3873a7 + ' .' + _0x4d5832 + "-picker")["colorpicker"]({
            'format': "hex"
          })['on']("changeColor.colorpicker", function(_0x56320e) {
            _0x39e92b[_0x4d5832] = _0x56320e.color.toHex(), ogario.hasOwnProperty(_0x4d5832) && (ogario[_0x4d5832] = _0x39e92b[_0x4d5832]), _0x3dac32[_0x342b22]();
          });
        } else jQuery(_0x3873a7 + ' .' + _0x4d5832 + '-picker')["colorpicker"]({
          'format': "hex"
        })['on']("changeColor.colorpicker", function(_0x37a25a) {
          _0x39e92b[_0x4d5832] = _0x37a25a.color.toHex(), ogario.hasOwnProperty(_0x4d5832) && (ogario[_0x4d5832] = _0x39e92b[_0x4d5832]);
        });
      },
      'addRgbaColorBox': function(_0x22bc5e, _0x12d549, _0x2fbd22) {
        if (jQuery(_0x22bc5e)['append']("<div class="color-box"><span class="title-box">" + _0x5a1e0a[_0x12d549] + "</span><div class="input-group " + _0x12d549 + "-picker"><input type="text" value="" + _0x39e92b[_0x12d549] + "" id="" + _0x12d549 + '\" class=\"form-control\" /><span class=\"input-group-addon\"><i></i></span></div></div>'), _0x2fbd22) {
          var _0xcb9420 = this;
          jQuery(_0x22bc5e + ' .' + _0x12d549 + '-picker')['colorpicker']({
            'format': "rgba"
          })['on']('changeColor.colorpicker', function(_0x1ec49c) {
            var jQuery = _0x1ec49c.color.toRGB();
            _0x39e92b[_0x12d549] = "rgba(" + jQuery.r + ',' + jQuery.g + ',' + jQuery.b + ',' + jQuery.a + ')', ogario.hasOwnProperty(_0x12d549) && (ogario[_0x12d549] = _0x39e92b[_0x12d549]), _0xcb9420[_0x2fbd22]();
          });
        } else jQuery(_0x22bc5e + ' .' + _0x12d549 + "-picker")["colorpicker"]({
          'format': "rgba"
        })['on']("changeColor.colorpicker", function(_0x3501a3) {
          var jQuery = _0x3501a3.color.toRGB();
          _0x39e92b[_0x12d549] = "rgba(" + jQuery.r + ',' + jQuery.g + ',' + jQuery.b + ',' + jQuery.a + ')', ogario.hasOwnProperty(_0x12d549) && (ogario[_0x12d549] = _0x39e92b[_0x12d549]);
        });
      },
      'addSliderBox': function(_0x2980ed, _0x10f91b, _0x59249b, _0x5476ba, _0x2192dd, _0xc5ce9f) {
        if (jQuery(_0x2980ed)['append']('<div class=\"slider-box\"><div class=\"box-label\"><span class=\"value-label\">' + _0x5a1e0a[_0x10f91b] + ': </span><span id=\"' + _0x10f91b + "-value" class="value">" + _0x39e92b[_0x10f91b] + '</span></div><input id=\"' + _0x10f91b + "-slider" type="range" min="" + _0x59249b + "" max="" + _0x5476ba + "" step="" + _0x2192dd + '\" value=\"' + _0x39e92b[_0x10f91b] + ""></div>"), _0xc5ce9f) {
          var _0x60355d = this;
          jQuery('#' + _0x10f91b + "-slider")['on']("input", function() {
            var _0x2980ed = parseFloat(jQuery(this)["val"]());
            jQuery('#' + _0x10f91b + "-value")['text'](_0x2980ed), _0x39e92b[_0x10f91b] = _0x2980ed, ogario.hasOwnProperty(_0x10f91b) && (ogario[_0x10f91b] = _0x2980ed), _0x60355d[_0xc5ce9f]();
          });
        } else jQuery('#' + _0x10f91b + "-slider")['on']('input', function() {
          var _0x2980ed = parseFloat(jQuery(this)["val"]());
          jQuery('#' + _0x10f91b + "-value")["text"](_0x2980ed), _0x39e92b[_0x10f91b] = _0x2980ed, ogario.hasOwnProperty(_0x10f91b) && (ogario[_0x10f91b] = _0x2980ed);
        });
      },
      'addInputBox': function(_0x3f3652, _0x326f2a, _0x36a591, _0x589d65) {
        jQuery(_0x3f3652)["append"]("<div class="input-box"><span class="title-box">" + _0x5a1e0a[_0x326f2a] + '</span><input id=\"' + _0x326f2a + "" class="form-control" placeholder="" + _0x36a591 + "" value="" + _0x39e92b[_0x326f2a] + "" /></div>");
        var _0x510ace = this;
        jQuery('#' + _0x326f2a)['on']("input", function() {
          _0x39e92b[_0x326f2a] = this.value, _0x510ace[_0x589d65]();
        });
      },
      'addCursorBox': function(_0x355007, _0x451e2e) {
        _0x451e2e === _0x39e92b.customCursor ? jQuery(_0x355007)["append"]("<div class="cursor-box"><a href="#" class="active"><img src="" + _0x451e2e + ""></a></div>") : jQuery(_0x355007)["append"]("<div class="cursor-box"><a href="#"><img src="" + _0x451e2e + ""></a></div>");
      },
      'setFont': function(_0x1885ba, _0x511a4d) {
        _0x39e92b[_0x1885ba] = _0x511a4d, _0x39e92b[_0x1885ba + "Family"] = this.setFontFamily(_0x511a4d), _0x39e92b[_0x1885ba + "Weight"] = this.setFontWeight(_0x511a4d), ogario.hasOwnProperty(_0x1885ba + "Family") && (ogario[_0x1885ba + "Family"] = _0x39e92b[_0x1885ba + "Family"]), ogario.hasOwnProperty(_0x1885ba + "Weight") && (ogario[_0x1885ba + "Weight"] = _0x39e92b[_0x1885ba + "Weight"]);
      },
      'addFontBox': function(_0x5657ea, _0x281b1e, _0x2f1c00) {
        jQuery(_0x5657ea)["append"]("<div class="font-box"><span class="title-box">" + _0x5a1e0a[_0x281b1e] + "</span><div class="select-wrapper"><select id="" + _0x281b1e + '\" class=\"form-control\"></select></div></div>'), jQuery('#' + _0x281b1e)["append"]("<option value="ubuntu">Ubuntu</option><option value="ubuntu-bold">Ubuntu Bold</option>"), jQuery('#' + _0x281b1e)["append"]("<option value="roboto">Roboto</option><option value="roboto-bold">Roboto Bold</option>"), jQuery('#' + _0x281b1e)["append"]("<option value="oswald">Oswald</option><option value="oswald-bold">Oswald Bold</option>"), jQuery('#' + _0x281b1e)["val"](_0x39e92b[_0x281b1e]);
        var _0x4fa3da = this;
        _0x2f1c00 ? jQuery('#' + _0x281b1e)['on']("change", function() {
          var _0x5657ea = this.value;
          _0x4fa3da.setFont(_0x281b1e, _0x5657ea), _0x4fa3da[_0x2f1c00]();
        }) : jQuery('#' + _0x281b1e)['on']("change", function() {
          var _0x5657ea = this.value;
          _0x4fa3da.setFont(_0x281b1e, _0x5657ea);
        });
      },
      'setFontFamily': function(_0xad63d3) {
        return -0x1 != _0xad63d3.indexOf("roboto") ? "Roboto" : -0x1 != _0xad63d3.indexOf("oswald") ? 'Oswald' : "Ubuntu";
      },
      'setFontWeight': function(_0x2b7726) {
        return -0x1 != _0x2b7726.indexOf("bold") ? 0x2bc : 0x190;
      },
      'setThemeMenu': function() {
        var window = this;
        jQuery("#theme")["append"]("<ul class="submenu-tabs"><li class="theme-main-tab active"><a href="#theme-main" class="active ogicon-paint-format" data-toggle="tab-tooltip" title="" + _0x5a1e0a.basicTheming + ""></a></li><li class="theme-menu-tab"><a href="#theme-menu" class="ogicon-menu" data-toggle="tab-tooltip" title="" + _0x5a1e0a.menuTheming + ""></a></li><li class="theme-hud-tab"><a href="#theme-hud" class="ogicon-display" data-toggle="tab-tooltip" title="" + _0x5a1e0a.hudTheming + '\"></a></li><li class=\"theme-chat-tab\"><a href=\"#theme-chat\" class=\"ogicon-bubbles\" data-toggle=\"tab-tooltip\" title=\"' + _0x5a1e0a.chatTheming + ""></a></li><li class="theme-minimap-tab"><a href="#theme-minimap" class="ogicon-location2" data-toggle="tab-tooltip" title="" + _0x5a1e0a.miniMapTheming + ""></a></li><li class="theme-images-tab"><a href="#theme-images" class="ogicon-compass" data-toggle="tab-tooltip" title="" + _0x5a1e0a.imagesTheming + ""></a></li></ul><div id="theme-main" class="submenu-panel"></div><div id="theme-menu" class="submenu-panel"></div><div id="theme-hud" class="submenu-panel"></div><div id="theme-chat" class="submenu-panel"></div><div id="theme-minimap" class="submenu-panel"></div><div id="theme-images" class="submenu-panel"></div>"), this.addPresetBox("#theme-main", "themePreset", _0x528e70, "preset", 'changeThemePreset'), this.addColorBox("#theme-main", 'bgColor', "setBgColor"), this.addColorBox("#theme-main", "bordersColor"), this.addColorBox("#theme-main", "gridColor"), this.addColorBox('#theme-main', "sectorsColor"), this.addColorBox('#theme-main', 'namesColor'), this.addColorBox("#theme-main", 'namesStrokeColor'), this.addColorBox('#theme-main', "massColor"), this.addColorBox("#theme-main", "massStrokeColor"), this.addColorBox("#theme-main", "virusColor"), this.addColorBox("#theme-main", "virusStrokeColor"), this.addColorBox("#theme-main", "foodColor", "setFoodColor"), this.addColorBox('#theme-main', "teammatesIndColor", "setIndicatorColor"), this.addColorBox("#theme-main", "cursorTrackingColor"), this.addColorBox("#theme-main", "splitRangeColor"), this.addFontBox("#theme-main", "namesFont"), this.addFontBox("#theme-main", 'massFont'), this.addFontBox('#theme-main', "sectorsFont"), this.addSliderBox("#theme-main", "sectorsFontSize", 0xc8, 0x7d0, 0xa), this.addSliderBox("#theme-main", 'namesScale', 0.5, 0x2, 0.1), this.addSliderBox("#theme-main", 'massScale', 0x1, 0x5, 0x1), this.addSliderBox('#theme-main', "virMassScale", 0x1, 0x5, 0x1), this.addSliderBox("#theme-main", "strokeScale", 0x1, 0x4, 0.1), this.addSliderBox("#theme-main", 'foodSize', 0x1, 0x32, 0x1, 'setFoodColor'), this.addSliderBox("#theme-main", "virusStrokeSize", 0x2, 0x28, 0x1), this.addSliderBox("#theme-main", 'bordersWidth', 0x2, 0xc8, 0x2), this.addSliderBox("#theme-main", 'sectorsWidth', 0x2, 0xc8, 0x2), this.addSliderBox("#theme-main", "cellsAlpha", 0.01, 0.99, 0.01), this.addSliderBox("#theme-main", "skinsAlpha", 0.01, 0.99, 0.01), this.addSliderBox("#theme-main", "virusAlpha", 0x0, 0x1, 0.01), this.addSliderBox("#theme-main", "textAlpha", 0.1, 0x1, 0.01), this.addPresetBox("#theme-menu", "menuPreset", _0x2f7e5d, "menuPreset", 'changeMenuPreset'), this.addSliderBox("#theme-menu", "menuOpacity", 0.1, 0x1, 0.01, 'setMenuOpacity'), this.addColorBox("#theme-menu", "menuMainColor", "setMenuMainColor"), this.addColorBox("#theme-menu", "menuBtnTextColor", "setMenuButtons"), this.addColorBox("#theme-menu", "menuPanelColor", "setMenuPanelColor"), this.addColorBox("#theme-menu", "menuPanelColor2", "setMenuPanelColor"), this.addColorBox("#theme-menu", 'menuTextColor', "setMenuTextColor"), this.addColorBox("#theme-menu", "menuTextColor2", 'setMenuTextColor'), this.addColorBox("#theme-menu", "btn1Color", "setMenuButtons"), this.addColorBox("#theme-menu", 'btn1Color2', "setMenuButtons"), this.addColorBox("#theme-menu", "btn2Color", "setMenuButtons"), this.addColorBox("#theme-menu", "btn2Color2", "setMenuButtons"), this.addColorBox("#theme-menu", "btn3Color", "setMenuButtons"), this.addColorBox('#theme-menu', "btn3Color2", "setMenuButtons"), this.addColorBox("#theme-menu", "btn4Color", "setMenuButtons"), this.addColorBox("#theme-menu", "btn4Color2", 'setMenuButtons'), this.addInputBox("#theme-menu", "menuBg", "Image URL", "setMenuBg"), this.addColorBox("#theme-hud", "hudMainColor", 'setHudColors'), this.addRgbaColorBox("#theme-hud", "hudColor", "setHudColors"), this.addColorBox("#theme-hud", "hudTextColor", 'setHudColors'), this.addColorBox('#theme-hud', "statsHudColor", "setHudColors"), this.addColorBox('#theme-hud', 'timeHudColor', "setHudColors"), this.addColorBox("#theme-hud", "top5MassColor", "setHudColors"), this.addColorBox("#theme-hud", "lbMeColor", "setHudColors"), this.addColorBox("#theme-hud", "lbTeammateColor", "setHudColors"), this.addFontBox("#theme-hud", "hudFont", 'setHudFont'), this.addSliderBox('#theme-hud', "hudScale", 0x1, 0x2, 0.01, "setHudScale"), this.addRgbaColorBox("#theme-chat", "messageColor", "setChatColors"), this.addColorBox("#theme-chat", "messageTextColor", "setChatColors"), this.addColorBox("#theme-chat", "messageTimeColor", "setChatColors"), this.addColorBox("#theme-chat", "messageNickColor", "setChatColors"), this.addRgbaColorBox("#theme-chat", "commandsColor", 'setChatColors'), this.addColorBox("#theme-chat", 'commandsTextColor', "setChatColors"), this.addColorBox("#theme-chat", "commandsTimeColor", "setChatColors"), this.addColorBox('#theme-chat', "commandsNickColor", "setChatColors"), this.addRgbaColorBox('#theme-chat', "chatBoxColor", "setChatColors"), this.addSliderBox("#theme-chat", "chatScale", 0x1, 0x2, 0.01, "setChatScale"), this.addColorBox('#theme-minimap', "miniMapSectorsColor", "setMiniMapSectorsColor"), this.addColorBox('#theme-minimap', "miniMapSectorColor"), this.addColorBox("#theme-minimap", "miniMapNickColor"), this.addColorBox('#theme-minimap', "miniMapNickStrokeColor"), this.addColorBox('#theme-minimap', "miniMapMyCellColor"), this.addColorBox("#theme-minimap", "miniMapMyCellStrokeColor"), this.addColorBox("#theme-minimap", "miniMapTeammatesColor"), this.addColorBox("#theme-minimap", 'miniMapDeathLocationColor'), this.addColorBox("#theme-minimap", "miniMapGuidesColor"), this.addFontBox("#theme-minimap", "miniMapFont", "setMiniMapFont"), this.addFontBox('#theme-minimap', 'miniMapNickFont'), this.addSliderBox('#theme-minimap', "miniMapWidth", 0xc8, 0x190, 0x2, "setMiniMapWidth"), this.addSliderBox('#theme-minimap', 'miniMapSectorsOpacity', 0x0, 0x1, 0.01, "setMiniMapSectorsOpacity"), this.addSliderBox("#theme-minimap", "miniMapNickSize", 0x8, 0x10, 0x1), this.addSliderBox("#theme-minimap", "miniMapNickStrokeSize", 0x0, 0x6, 0x1), this.addSliderBox("#theme-minimap", "miniMapMyCellSize", 0x4, 0xa, 0.5), this.addSliderBox('#theme-minimap', "miniMapMyCellStrokeSize", 0x0, 0xa, 0x1), this.addSliderBox("#theme-minimap", "miniMapTeammatesSize", 0x4, 0xa, 0.5), this.addInputBox("#theme-images", 'customBackground', "Image URL", "setCustomBackground"), this.addInputBox("#theme-images", 'customCursor', 'Cursor image URL', 'setCustomCursor');
        for (var ogario = "http://cdn.ogario.ovh/static/img/cursors/cursor_", _0x535763 = 0x0; _0x535763 < 0x23; _0x535763++) _0x535763 < 0x9 ? this.addCursorBox("#theme-images", ogario + '0' + (_0x535763 + 0x1) + ".cur") : this.addCursorBox("#theme-images", ogario + '' + (_0x535763 + 0x1) + ".cur");
        jQuery(document)['on']('click', "#theme-images .cursor-box a", function(_0x954d53) {
          _0x954d53.preventDefault();
          var _0x45f3dc = jQuery('img', this)["attr"]("src");
          _0x39e92b.customCursor = _0x45f3dc, window.setCustomCursor(), jQuery("#customCursor")["val"](_0x45f3dc), jQuery("#theme-images .cursor-box a")["removeClass"]("active"), jQuery(this)['addClass']("active");
        }), jQuery("#theme")["append"]("<button class="btn btn-block btn-success btn-save"">" + _0x5a1e0a.saveSett + "</button>"), jQuery(document)['on']("click", "#theme .btn-save", function(_0x26df5c) {
          _0x26df5c.preventDefault();
          var _0xfbe24d = jQuery(this);
          _0xfbe24d.text(_0x5a1e0a.saved), window.saveThemeSettings(), setTimeout(function() {
            _0xfbe24d.text(_0x5a1e0a.saveSett);
          }, 0x1f4);
        }), jQuery("#theme")["append"]("<div class="restore-settings"><a href="#">" + _0x5a1e0a.restoreThemeSettings + '</a></div>'), jQuery(document)['on']("click", "#theme .restore-settings a", function(_0x5d0340) {
          _0x5d0340.preventDefault(), window.restoreThemeSettings();
        }), jQuery(".skin")["colorpicker"]({
          'format': "hex",
          'input': "#color"
        });
      },
      'changePreset': function(_0x36d788, _0x8a45aa) {
        if (_0x8a45aa[_0x36d788]) {
          _0x39e92b[_0x36d788] = _0x36d788;
          _0x36d788 = _0x8a45aa[_0x36d788];
          for (var _0x267fbd in _0x36d788) _0x36d788.hasOwnProperty(_0x267fbd) && _0x39e92b.hasOwnProperty(_0x267fbd) && (_0x39e92b[_0x267fbd] = _0x36d788[_0x267fbd], ogario.hasOwnProperty(_0x267fbd) && (ogario[_0x267fbd] = _0x39e92b[_0x267fbd]), jQuery("#theme ." + _0x267fbd + "-picker") && jQuery("#theme ." + _0x267fbd + "-picker")["colorpicker"]("setValue", _0x39e92b[_0x267fbd]), jQuery('#' + _0x267fbd + "-slider") && jQuery('#' + _0x267fbd + "-slider")["val"](_0x39e92b[_0x267fbd])["change"](), (jQuery("input[type=text]#" + _0x267fbd) || jQuery("select#" + _0x267fbd)) && jQuery('#' + _0x267fbd)["val"](_0x39e92b[_0x267fbd]));
        }
      },
      'changeThemePreset': function(_0x197532) {
        this.changePreset(_0x197532, _0x528e70), this.setTheme();
      },
      'setFonts': function() {
        this.setFont("namesFont", _0x39e92b.namesFont), this.setFont("massFont", _0x39e92b.namesFont), this.setFont("sectorsFont", _0x39e92b.sectorsFont);
      },
      'setBgColor': function() {
        jQuery('body')["css"]('background-color', _0x39e92b.bgColor);
      },
      'setFoodColor': function() {
        _0x2127b2.optimizedFood && _0x352231 && _0x352231.preDrawPellet();
      },
      'setIndicatorColor': function() {
        _0x352231 && _0x352231.preDrawIndicator();
      },
      'setCustomBackground': function() {
        _0x39e92b.customBackground ? jQuery('body')['css']("background-image", "url(" + _0x39e92b.customBackground + ')') : jQuery("body")["css"]("background-image", "none");
      },
      'setCustomCursor': function() {
        if (_0x39e92b.customCursor) var window = '*{cursor:url(' + _0x39e92b.customCursor + "), auto !important}";
        else window = "*{cursor: auto}";
        this.addCustomCSS("cursorCSS", window);
      },
      'setMenu': function() {
        this.setMenuOpacity(), this.setMenuMainColor(), this.setMenuPanelColor(), this.setMenuTextColor(), this.setMenuButtons(), this.setMenuBg();
      },
      'changeMenuPreset': function(_0x443136) {
        this.changePreset(_0x443136, _0x2f7e5d), this.setMenu();
      },
      'setMenuOpacity': function() {
        jQuery("#helloContainer, #hotkeys, #exp-imp")['css']("opacity", _0x39e92b.menuOpacity);
      },
      'setMenuMainColor': function() {
        var window = '::-moz-selection{background-color:' + _0x39e92b.menuMainColor + "!important}::selection{background-color:" + _0x39e92b.menuMainColor + "!important}.menu-main-color,#quick-menu a:hover,.quick,.quick:focus,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs a:hover,.submenu-tabs .active,#stats center,#exp-imp h1{color:" + _0x39e92b.menuMainColor + '}#exp-bar .progress-bar-striped,.quick:hover,.rangeslider__fill{background-color:' + _0x39e92b.menuMainColor + "}#main-menu,.agario-side-panel,#hotkeys,#exp-imp{border-color:" + _0x39e92b.menuMainColor + "}.ps-scrollbar-y{background-color:" + _0x39e92b.menuMainColor + '!important}';
        this.addCustomCSS("menuMainColorCSS", window);
      },
      'setMenuPanelColor': function() {
        var window = "#main-menu,.agario-side-panel,#hotkeys,#exp-imp{background-color: " + _0x39e92b.menuPanelColor + "}label:hover,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.nick .input-group-btn,.skin .input-group-btn,#stream-mode,#hide-url,.menu-tabs a:hover,.menu-tabs .active,.submenu-tabs,#exp-bar .progress,#quick-menu a:hover,.quick,.select-wrapper,#hotkeys-cfg div.row:hover,#hotkeys-cfg .command-in,#exp-imp-settings textarea,.restore-settings{background-color: " + _0x39e92b.menuPanelColor2 + "}.agario-panel h5,.agario-side-panel h5,#stats h2,.menu-tabs,.submenu-tabs,#skins a.default,#stats hr,#hotkeys-cfg div.row, #exp-imp h1{border-color: " + _0x39e92b.menuPanelColor2 + '}.quick:hover,#skins a,#profiles{color:' + _0x39e92b.menuPanelColor2 + '}input.stream-mode,input.hide-url{color:' + _0x39e92b.menuPanelColor2 + "!important}";
        this.addCustomCSS("menuPanelColorCSS", window);
      },
      'setMenuTextColor': function() {
        var window = '.agario-panel,.agario-side-panel,.agario-panel input,.agario-panel select,.agario-side-panel input,.agario-side-panel select,.input-group-addon,.dark .yt-username,#stream-mode,#hide-url,.menu-tabs a,.submenu-tabs a,#skins a.default:hover,#quick-menu a,#prev-profile.default:hover,#next-profile.default:hover,#statsText,#hotkeys,#hotkeys-cfg .command-in,#exp-imp{color:' + _0x39e92b.menuTextColor + "}#skins a.default:hover{border-color:" + _0x39e92b.menuTextColor + "}::-webkit-input-placeholder{color:" + _0x39e92b.menuTextColor2 + "!important}::-moz-placeholder{color:" + _0x39e92b.menuTextColor2 + "!important}#user-id-tag, #version-tag,#statsSubtext,#hotkeys-inst,#exp-imp textarea,.restore-settings a,.restore-settings a:hover{color:" + _0x39e92b.menuTextColor2 + "}#hotkeys-cfg .command-in,#theme .color-box{border-color:" + _0x39e92b.menuTextColor2 + '}';
        this.addCustomCSS("menuTextColorCSS", window);
      },
      'setMenuButtons': function() {
        var window = "a,a:hover{color:" + _0x39e92b.btn1Color + "}.btn,#hotkeys-cfg .custom-key-in{color:" + _0x39e92b.menuBtnTextColor + "}.btn-primary{background-color:" + _0x39e92b.btn1Color + "!important}.btn-primary:active,.btn-primary:disabled,.btn-primary:focus,.btn-primary:hover{background-color:" + _0x39e92b.btn1Color2 + "!important}.btn-success{background-color:" + _0x39e92b.btn2Color + "!important}.btn-success:active,.btn-success:disabled,.btn-success:focus,.btn-success:hover{background-color:" + _0x39e92b.btn2Color2 + "!important}.btn-warning{background-color:" + _0x39e92b.btn3Color + '!important}.btn-warning:active,.btn-warning:disabled,.btn-warning:focus,.btn-warning:hover{background-color:' + _0x39e92b.btn3Color2 + "!important}.btn-danger{background-color:" + _0x39e92b.btn4Color + "!important}.btn-danger:active,.btn-danger:disabled,.btn-danger:focus,.btn-danger:hover{background-color:" + _0x39e92b.btn4Color2 + '!important}#hotkeys-cfg .custom-key-in{background-color:' + _0x39e92b.btn4Color2 + ";border-color:" + _0x39e92b.btn4Color2 + '}';
        this.addCustomCSS('menuButtonsCSS', window);
      },
      'setMenuBg': function() {
        jQuery("#menuBg")["val"](_0x39e92b.menuBg), _0x39e92b.menuBg ? jQuery(".menu-panel, .agario-side-panel, #hotkeys, #exp-imp")["css"]("background-image", "url(" + _0x39e92b.menuBg + ')') : jQuery(".menu-panel, .agario-side-panel, #hotkeys, #exp-imp")["css"]("background-image", 'none');
      },
      'setHud': function() {
        this.setHudColors(), this.setHudFont(), this.setHudScale();
      },
      'setHudColors': function() {
        var window = '.hud-main-color,#top5-hud a,#target-panel-hud a:hover,#target-panel-hud a.active,#message-menu a{color:' + _0x39e92b.hudMainColor + '}.hud,.hud-b,#chat-emoticons{background-color:' + _0x39e92b.hudColor + "}.hud,.hud-b,#top5-hud a:hover,#target-panel-hud a{color:" + _0x39e92b.hudTextColor + '}.stats-hud-color{color:' + _0x39e92b.statsHudColor + "}.time-hud-color{color:" + _0x39e92b.timeHudColor + "}.top5-mass-color{color:" + _0x39e92b.top5MassColor + "}#leaderboard-positions .me{color:" + _0x39e92b.lbMeColor + "}#leaderboard-positions .teammate{color:" + _0x39e92b.lbTeammateColor + '}';
        this.addCustomCSS("hudCSS", window);
      },
      'setHudFont': function() {
        this.setFont("hudFont", _0x39e92b.hudFont), jQuery("#overlays-hud")["css"]({
          'font-family': _0x39e92b.hudFontFamily,
          'font-weight': _0x39e92b.hudFontWeight
        });
      },
      'setHudScale': function() {
        var window = Math.round(0x14 * _0x39e92b.hudScale),
          ogario = Math.round(0xc8 * _0x39e92b.hudScale),
          _0x2730e8 = Math.floor(0x37 * _0x39e92b.hudScale),
          _0x5412d0 = Math.floor(0x14 * _0x39e92b.hudScale),
          _0x9cbc58 = Math.floor(0x118 * _0x39e92b.hudScale),
          _0x2c20a3 = Math.floor(0x55 * _0x39e92b.hudScale),
          _0x4dd637 = Math.floor(0x14 * _0x39e92b.hudScale);
        jQuery("#overlays-hud")["css"]('font-size', window + 'px'), jQuery("#leaderboard-hud, #time-hud")['width'](ogario), jQuery("#top5-hud")["width"](ogario + 0x14)["css"]('top', _0x2730e8 + 'px'), jQuery("#top5-pos")["css"]("padding-left", _0x5412d0 + 'px'), jQuery("#time-hud")["css"]("top", _0x9cbc58 + 'px'), jQuery("#pause-hud")["css"]('top', _0x2c20a3 + 'px'), jQuery("#target-hud")['css']('padding-top', _0x4dd637 + 'px');
      },
      'setChat': function() {
        this.setChatColors(), this.setChatScale();
      },
      'setChatColors': function() {
        var window = "#message,#messages li,.toast-success{background-color:" + _0x39e92b.messageColor + "}#message,.message-text,.toast-success .message-text{color:" + _0x39e92b.messageTextColor + "}.message-nick,.mute-user,.mute-user:hover,.toast-success .message-nick,.toast .mute-user,.toast .mute-user:hover{color:" + _0x39e92b.messageNickColor + "}.message-time{color:" + _0x39e92b.messageTimeColor + "}.toast-warning{background-color:" + _0x39e92b.commandsColor + "}.command-text,.toast-warning .command-text{color:" + _0x39e92b.commandsTextColor + "}.command-nick,.toast-warning .command-nick,.toast-warning .mute-user,.toast-warning .mute-user:hover{color:" + _0x39e92b.commandsNickColor + "}.command-time{color:" + _0x39e92b.commandsTimeColor + "}#chat-box{background-color:" + _0x39e92b.chatBoxColor + '}';
        this.addCustomCSS("chatCSS", window);
      },
      'setChatScale': function() {
        var window = Math.round(0xe * _0x39e92b.chatScale),
          ogario = Math.round(0x118 * _0x39e92b.chatScale),
          _0x2f75b6 = Math.round(0x15e * _0x39e92b.chatScale),
          _0x511156 = Math.round(0x12c * _0x39e92b.chatScale),
          _0x514a62 = Math.floor(0xe * _0x39e92b.chatScale);
        jQuery("#message-box, #messages, #toast-container, #chat-box")["css"]("font-size", window + 'px'), jQuery("#messages, #toast-container, #chat-box")["width"](ogario), jQuery("#message-box")["width"](_0x2f75b6), jQuery("#chat-box")["height"](_0x511156), jQuery(".user-list")['css']("padding-left", _0x514a62 + 'px');
        var _0x56c0a6 = '#toast-container{width:' + ogario + "px;font-size:" + window + "px}";
        this.addCustomCSS("chatScaleCSS", _0x56c0a6);
      },
      'setMiniMap': function() {
        this.setMiniMapFont(), this.setMiniMapWidth(), this.setMiniMapSectorsOpacity();
      },
      'setMiniMapFont': function() {
        this.setFont("miniMapFont", _0x39e92b.miniMapFont), _0x352231 && _0x352231.resetMiniMapSectors();
      },
      'setMiniMapWidth': function() {
        var window = _0x39e92b.miniMapWidth / 0xc8;
        _0x39e92b.miniMapTop = Math.round(0x14 * window), jQuery('#minimap-hud')["css"]({
          'width': _0x39e92b.miniMapWidth,
          'height': _0x39e92b.miniMapWidth + _0x39e92b.miniMapTop
        }), _0x352231 && _0x352231.resetMiniMapSectors();
      },
      'setMiniMapSectorsColor': function() {
        _0x352231 && _0x352231.resetMiniMapSectors();
      },
      'setMiniMapSectorsOpacity': function() {
        jQuery("#minimap-sectors")["css"]("opacity", _0x39e92b.miniMapSectorsOpacity);
      },
      'setTheme': function() {
        this.setFonts(), this.setBgColor(), this.setCustomBackground(), this.setCustomCursor(), this.setMenu(), this.setHud(), this.setChat(), this.setMiniMap();
      },
      'init': function() {
        this.loadThemeSettings();
      }
    },
    _0x2ace8d = [],
    _0x234c62 = {
      'nick': "I <3 OGARio",
      'clanTag': 'Ⓜ',
      'skinURL': '',
      'color': _0x39e92b.mainColor
    },
    _0x2127b2 = {
      'quickResp': !0x0,
      'autoResp': !0x1,
      'autoZoom': !0x1,
      'autoHideNames': !0x0,
      'autoHideMass': !0x0,
      'autoHideFood': !0x1,
      'autoHideFoodOnZoom': !0x1,
      'noNames': !0x1,
      'optimizedNames': !0x0,
      'hideMyName': !0x0,
      'hideTeammatesNames': !0x1,
      'showMass': !0x0,
      'optimizedMass': !0x0,
      'shortMass': !0x0,
      'virMassShots': !0x0,
      'hideMyMass': !0x1,
      'hideEnemiesMass': !0x1,
      'vanillaSkins': !0x1,
      'customSkins': !0x0,
      'myTransparentSkin': !0x1,
      'myCustomColor': !0x1,
      'transparentCells': !0x1,
      'transparentViruses': !0x0,
      'transparentSkins': !0x1,
      'showGrid': !0x1,
      'showBgSectors': !0x1,
      'showMapBorders': !0x0,
      'showMiniMap': !0x0,
      'showMiniMapGrid': !0x1,
      'showMiniMapGuides': !0x0,
      'oneColoredTeammates': !0x1,
      'optimizedFood': !0x0,
      'rainbowFood': !0x1,
      'oppColors': !0x1,
      'oppRings': !0x1,
      'virColors': !0x1,
      'splitRange': !0x1,
      'virusesRange': !0x1,
      'textStroke': !0x1,
      'namesStroke': !0x1,
      'massStroke': !0x1,
      'cursorTracking': !0x1,
      'teammatesInd': !0x1,
      'mouseSplit': !0x1,
      'mouseFeed': !0x1,
      'mouseInvert': !0x1,
      'disableChat': !0x1,
      'hideChat': !0x1,
      'chatSounds': !0x0,
      'chatEmoticons': !0x0,
      'showChatBox': !0x1,
      'showChatImages': !0x0,
      'showChatVideos': !0x0,
      'showTop5': !0x0,
      'showTargeting': !0x0,
      'showTime': !0x0,
      'normalLb': !0x1,
      'centeredLb': !0x0,
      'fpsAtTop': !0x0,
      'showStats': !0x0,
      'showStatsMass': !0x0,
      'showStatsSTE': !0x1,
      'showStatsN16': !0x1,
      'showStatsFPS': !0x0,
      'blockPopups': !0x1,
      'streamMode': !0x1,
      'hideSkinUrl': !0x1,
      'showQuickMenu': !0x0,
      'showSkinsPanel': !0x0,
      'animation': 0x8c,
      'zoomSpeedValue': 0.9,
      'messageSound': "http://cdn.ogario.ovh/static/sounds/notification_01.mp3",
      'commandSound': 'http://cdn.ogario.ovh/static/sounds/notification_02.mp3'
    };

  function _0x13b585() {
    this.txt = '', this.txtCanvas = null, this.txtCtx = null, this.color = "#FFFFFF", this.stroke = !0x1, this.strokeWidth = 0x2, this.strokeColor = "#000000", this.font = '700 16px Ubuntu', this.fontFamily = "Ubuntu", this.fontWeight = 0x2bc, this.fontSize = 0x10, this.margin = 0x3, this.scale = 0x1, this.quality = 0x1, this.measuredWidth = 0x0, this.redraw = !0x1, this.remeasure = !0x1, this.setTxt = function(_0x2ba322) {
      this.txt !== _0x2ba322 && (this.txt = _0x2ba322, this.redraw = !0x0, this.remeasure = !0x0);
    }, this.setColor = function(_0x255e0f) {
      this.color !== _0x255e0f && (this.color = _0x255e0f, this.redraw = !0x0);
    }, this.setStroke = function(_0x5e9143) {
      this.stroke !== _0x5e9143 && (this.stroke = _0x5e9143, this.redraw = !0x0);
    }, this.setStrokeWidth = function(_0x28d985) {
      this.stroke && this.strokeWidth != _0x28d985 && (this.strokeWidth = _0x28d985, this.redraw = !0x0, this.remeasure = !0x0);
    }, this.setStrokeColor = function(_0x5073d2) {
      this.stroke && this.strokeColor !== _0x5073d2 && (this.strokeColor = _0x5073d2, this.redraw = !0x0);
    }, this.setFont = function() {
      this.font = this.fontWeight + ' ' + this.fontSize + 'px ' + this.fontFamily;
    }, this.setFontFamily = function(_0x2fd771) {
      this.fontFamily !== _0x2fd771 && (this.fontFamily = _0x2fd771, this.setFont(), this.redraw = !0x0, this.remeasure = !0x0);
    }, this.setFontWeight = function(_0x59d61f) {
      this.fontWeight != _0x59d61f && (this.fontWeight = _0x59d61f, this.setFont(), this.redraw = !0x0, this.remeasure = !0x0);
    }, this.setFontSize = function(_0x1f6b69) {
      this.fontSize != _0x1f6b69 && (this.fontSize = _0x1f6b69, this.margin = ~~(0.2 * _0x1f6b69), this.setFont(), this.redraw = !0x0);
    }, this.setScale = function(_0x68b01b) {
      this.scale != _0x68b01b && (this.scale = _0x68b01b, this.redraw = !0x0);
    }, this.createCanvas = function() {
      this.txtCanvas || (this.txtCanvas = document.createElement("canvas"), this.txtCtx = this.txtCanvas.getContext('2d'), this.txtCtx.ogarioCtx = !0x0);
    }, this.setDrawing = function(_0x1e7a19, _0x4d8710, _0x3f57f9, _0x157c6b, _0x2c575b, _0x45f429) {
      this.setColor(_0x1e7a19), this.setFontFamily(_0x4d8710), this.setFontWeight(_0x3f57f9), this.setStroke(_0x157c6b), this.setStrokeWidth(_0x2c575b), this.setStrokeColor(_0x45f429);
    }, this.measureWidth = function() {
      return this.remeasure && (this.txtCtx.font = this.fontWeight + ' 10px ' + this.fontFamily, this.measuredWidth = this.txtCtx.measureText(this.txt)["width"], this.remeasure = !0x1), ~~(this.fontSize / 0xa * this.measuredWidth) + 0x2 * this.strokeWidth;
    }, this.drawTxt = function() {
      return this.createCanvas(), this.redraw && (this.redraw = !0x1, this.txtCanvas.width = this.measureWidth(), this.txtCanvas.height = this.fontSize + this.margin, this.txtCtx.font = this.font, this.txtCtx.globalAlpha = 0x1, this.txtCtx.lineWidth = this.strokeWidth, this.txtCtx.strokeStyle = this.strokeColor, this.txtCtx.fillStyle = this.color, this.stroke && this.txtCtx.strokeText(this.txt, this.strokeWidth, this.fontSize - this.margin / 0x2), this.txtCtx.fillText(this.txt, this.strokeWidth, this.fontSize - this.margin / 0x2)), this.txtCanvas;
    };
  }
  var _0x352231 = {
      'name': "OGARio by szymy v3",
      'version': "v3 (3.4.3)",
      'privateMode': !0x1,
      'publicIP': 'ws://164.132.227.101:3000',
      'privateIP': null,
      'updateInterval': 0x3e8,
      'updateTick': 0x0,
      'updateMaxTick': 0x2,
      'currentSector': '',
      'miniMap': null,
      'miniMapCtx': null,
      'miniMapSectors': null,
      'pi2': 0x2 * Math.PI,
      'socket': null,
      'cells': {},
      'teamPlayers': [],
      'parties': [],
      'chatHistory': [],
      'chatUsers': {},
      'chatMutedUsers': {},
      'chatMutedUserIDs': [],
      'customSkinsCache': {},
      'customSkinsMap': {},
      'cacheQueue': [],
      'deathLocations': [],
      'playerID': null,
      'playerMass': 0x0,
      'selectedProfile': 0x0,
      'lastDeath': 0x0,
      'skipServerData': !0x1,
      'initialized': !0x1,
      'gameMode': '',
      'region': '',
      'partyToken': '',
      'ws': '',
      'serverIP': '',
      'serverArena': '',
      'serverToken': '',
      'lastSentNick': '',
      'lastSentClanTag': null,
      'lastSentSkinURL': '',
      'lastSentCustomColor': '',
      'lastSentPartyToken': '',
      'lastSentServerToken': '',
      'lastMessageSentTime': Date.now(),
      'rFps': 0x0,
      'renderedFrames': 0x0,
      'fpsLastRequest': null,
      'statsHUD': null,
      'leaderboardPositionsHUD': null,
      'activeParties': null,
      'top5pos': null,
      'top5totalMass': null,
      'top5totalPlayers': null,
      'top5limit': 0x5,
      'timeHUD': null,
      'questHUD': null,
      'retryResp': 0x0,
      'token': "b2dhcmlvLm92aA==",
      'canvasScale': 0x1,
      'selectBiggestCell': !0x0,
      'noSkins': !0x1,
      'noColors': !0x1,
      'skipStats': !0x1,
      'showQuest': !0x1,
      'playArenaSounds': !0x1,
      'playMenuSounds': !0x1,
      'showSplitInd': !0x1,
      'pause': !0x1,
      'targetID': 0x0,
      'targetStatus': 0x0,
      'targetNick': '',
      'targetSkinURL': '',
      'targeting': !0x1,
      'privateMiniMap': !0x1,
      'indicator': null,
      'pellet': null,
      'messageSound': null,
      'commandSound': null,
      'popupsForceUnblocked': !0x1,
      'feedInterval': null,
      'getPlayerX': function() {
        return ogario.playerX + ogario.mapOffsetX;
      },
      'getPlayerY': function() {
        return ogario.playerY + ogario.mapOffsetY;
      },
      'feed': function() {
        window.core && window.core.eject && window.core.eject();
      },
      'macroFeed': function(_0x223333) {
        if (_0x223333) {
          if (this.feedInterval) return;
          var ogario = this;
          this.feed(), this.feedInterval = setInterval(function() {
            ogario.feed();
          }, 0x50);
        } else this.feedInterval && (clearInterval(this.feedInterval), this.feedInterval = null);
      },
      'split': function() {
        window.core && window.core.split && window.core.split();
      },
      'doubleSplit': function() {
        var window = this;
        window.split(), setTimeout(function() {
          window.split();
        }, 0x28);
      },
      'popSplit': function() {
        var window = this;
        window.split(), setTimeout(function() {
          window.split();
        }, 0xc8);
      },
      'split16': function() {
        var window = this;
        window.split(), setTimeout(function() {
          window.split();
        }, 0x28), setTimeout(function() {
          window.split();
        }, 0x50), setTimeout(function() {
          window.split();
        }, 0x78);
      },
      'toggleSkins': function() {
        ogario.vanillaSkins && ogario.customSkins ? ogario.vanillaSkins = !0x1 : !ogario.vannillaSkins && ogario.customSkins ? (ogario.vanillaSkins = !0x0, ogario.customSkins = !0x1) : (ogario.vanillaSkins = !0x0, ogario.customSkins = !0x0);
      },
      'toggleCells': function() {
        this.selectBiggestCell = !this.selectBiggestCell, ogario.selectBiggestCell = this.selectBiggestCell;
      },
      'setShowTop5': function() {
        _0x2127b2.showTop5 = !_0x2127b2.showTop5, this.setTop5();
      },
      'setTop5': function() {
        _0x2127b2.showTop5 ? jQuery("#top5-hud")["show"]() : jQuery("#top5-hud")["hide"]();
      },
      'setShowTargeting': function() {
        _0x2127b2.showTargeting = !_0x2127b2.showTargeting, this.setTargetingHUD();
      },
      'setTargetingHUD': function() {
        _0x2127b2.showTargeting ? jQuery("#target-hud, #target-panel-hud")['show']() : jQuery("#target-hud, #target-panel-hud")["hide"]();
      },
      'setShowTime': function() {
        _0x2127b2.showTime = !_0x2127b2.showTime, _0x2127b2.showTime ? (jQuery("#time-hud")['show'](), this.displayTime()) : jQuery("#time-hud")["hide"]();
      },
      'setShowSplitRange': function() {
        _0x2127b2.splitRange = !_0x2127b2.splitRange, ogario.splitRange = _0x2127b2.splitRange;
      },
      'setShowSplitInd': function() {
        this.showSplitInd = !this.showSplitInd, _0x2127b2.splitRange = this.showSplitInd, _0x2127b2.oppRings = this.showSplitInd, ogario.splitRange = _0x2127b2.splitRange, ogario.oppRings = _0x2127b2.oppRings;
      },
      'setShowTeammatesInd': function() {
        _0x2127b2.teammatesInd = !_0x2127b2.teammatesInd;
      },
      'setShowOppColors': function() {
        _0x2127b2.oppColors = !_0x2127b2.oppColors, ogario.oppColors = _0x2127b2.oppColors;
      },
      'setShowSkins': function() {
        this.noSkins = !this.noSkins, window.core && window.core.setSkins && window.core.setSkins(!this.noSkins), ogario.showCustomSkins = !this.noSkins, this.displayChatInfo(!this.noSkins, "showSkinsMsg");
      },
      'setTransparentSkins': function() {
        _0x2127b2.transparentSkins = !_0x2127b2.transparentSkins, ogario.transparentSkins = _0x2127b2.transparentSkins;
      },
      'setShowStats': function() {
        jQuery("#stats-hud")["toggle"]();
      },
      'setShowFood': function() {
        ogario.showFood = !ogario.showFood;
      },
      'setShowHUD': function() {
        jQuery("#overlays-hud")["toggle"]();
      },
      'setShowGrid': function() {
        _0x2127b2.showGrid = !_0x2127b2.showGrid;
      },
      'setShowMiniMapGuides': function() {
        _0x2127b2.showMiniMapGuides = !_0x2127b2.showMiniMapGuides;
      },
      'setShowLb': function() {
        ":teams" !== this.gameMode && jQuery("#leaderboard-hud")['toggle']();
      },
      'setShowBgSectors': function() {
        _0x2127b2.showBgSectors = !_0x2127b2.showBgSectors;
      },
      'setHideSmallBots': function() {
        ogario.hideSmallBots = !ogario.hideSmallBots, this.displayChatInfo(!ogario.hideSmallBots, 'hideSmallBotsMsg');
      },
      'setShowNames': function() {
        _0x2127b2.noNames = !_0x2127b2.noNames;
      },
      'setHideTeammatesNames': function() {
        _0x2127b2.hideTeammatesNames = !_0x2127b2.hideTeammatesNames;
      },
      'setShowMass': function() {
        _0x2127b2.showMass = !_0x2127b2.showMass;
      },
      'setShowMiniMap': function() {
        _0x2127b2.showMiniMap = !_0x2127b2.showMiniMap, this.setMiniMap();
      },
      'setMiniMap': function() {
        _0x2127b2.showMiniMap ? jQuery("#minimap-hud")["show"]() : jQuery("#minimap-hud")["hide"]();
      },
      'setShowQuest': function() {
        '' === this.gameMode && (this.showQuest = !this.showQuest, this.setQuest());
      },
      'setQuest': function() {
        this.showQuest && '' === this.gameMode ? jQuery("#quest-hud")['show']() : jQuery("#quest-hud")["hide"]();
      },
      'toggleAutoZoom': function() {
        ogario.autoZoom = !ogario.autoZoom, this.displayChatInfo(ogario.autoZoom, "autoZoomMsg");
      },
      'resetZoom': function(_0x3ec665) {
        _0x3ec665 ? (ogario.zoomResetValue = 0x1, ogario.zoomValue = 0x1) : ogario.zoomResetValue = 0x0;
      },
      'setZoom': function(_0x14959e) {
        ogario.zoomValue = _0x14959e;
      },
      'toggleDeath': function() {
        this.lastDeath--, this.lastDeath < 0x0 && (this.lastDeath = this.deathLocations.length - 0x1);
      },
      'tryResp': function() {
        if (ogario.play || 0x14 == this.retryResp) this.retryResp = 0x0;
        else {
          this.retryResp++;
          var window = this;
          setTimeout(function() {
            jQuery(".btn-play-guest")['is'](":visible") ? jQuery(".btn-play-guest")["click"]() : jQuery('.btn-play')["click"](), ogario.play || window.tryResp();
          }, 0x1f4);
        }
      },
      'quickResp': function() {
        _0x2127b2.quickResp && (jQuery(".ogario-menu")["hide"](), this.gameServerConnect(this.ws), ogario.play = !0x1, this.tryResp());
      },
      'autoResp': function() {
        _0x2127b2.autoResp && (this.setAutoResp(), jQuery("#overlays")['stop']()["hide"](), jQuery(".btn-play-guest")['is'](':visible') ? jQuery(".btn-play-guest")["click"]() : jQuery('.btn-play')['click']());
      },
      'setAutoResp': function() {
        _0x2127b2.autoResp && (jQuery("#skipStats")['prop']('checked') || (jQuery("#skipStats")["click"](), this.skipStats = !0x0));
      },
      'toggleAutoResp': function() {
        _0x2127b2.autoResp = !_0x2127b2.autoResp, this.setAutoResp(), this.displayChatInfo(_0x2127b2.autoResp, "autoRespMsg");
      },
      'copyLb': function() {
        var window = jQuery("<input>");
        jQuery("body")["append"](window), window.val(jQuery("#leaderboard-positions")["text"]())['select']();
        try {
          document.execCommand("copy");
        } catch (_0x126309) {}
        window.remove();
      },
      'setPause': function() {
        this.pause = !this.pause, ogario.pause = this.pause, this.pause ? jQuery("#pause-hud")["show"]() : jQuery("#pause-hud")["hide"]();
      },
      'setCenteredLb': function() {
        _0x2127b2.centeredLb ? jQuery("#leaderboard-hud")["addClass"]("hud-text-center") : jQuery("#leaderboard-hud")['removeClass']("hud-text-center");
      },
      'setNormalLb': function() {
        _0x2127b2.normalLb ? jQuery("#leaderboard-hud h4")["html"](_0x5a1e0a.leaderboard) : jQuery("#leaderboard-hud h4")['html']('ogario.ovh');
      },
      'setFpsAtTop': function() {
        _0x2127b2.fpsAtTop ? jQuery("#stats-hud")["removeClass"]("hud-bottom")["addClass"]("hud-top") : jQuery("#stats-hud")["removeClass"]('hud-top')["addClass"]("hud-bottom");
      },
      'setBlockPopups': function() {
        _0x2127b2.blockPopups ? this.blockPopups() : this.unblockPopups();
      },
      'blockPopups': function() {
        jQuery('#openfl-content, #openfl-overlay, #leagues-app')['hide'](), jQuery("#openfl-content, #openfl-overlay, #leagues-app")["addClass"]("block-popups"), jQuery(".btn-freecoins, #gifting, #openShopBtn, #dailyQuests, #potions, .btn-leagues")["prop"]("disabled", !0x0), jQuery("#block-warn")['show'](), this.popupsForceUnblocked = !0x1;
      },
      'unblockPopups': function() {
        jQuery('#openfl-overlay.disabler')['click'](), jQuery("#openfl-content, #openfl-overlay, #leagues-app")["hide"](), jQuery("#openfl-content, #openfl-overlay, #leagues-app")["removeClass"]("block-popups"), jQuery(".btn-freecoins, #gifting, #openShopBtn, #dailyQuests, #potions, .btn-leagues")["prop"]('disabled', !0x1), jQuery("#block-warn")["hide"]();
      },
      'forceUnblockPopups': function() {
        this.unblockPopups(), this.popupsForceUnblocked = !0x0;
      },
      'tempUnblockPopups': function() {
        _0x2127b2.blockPopups && this.unblockPopups();
      },
      'displayLeaderboard': function(_0x2032c1) {
        this.leaderboardPositionsHUD && (this.leaderboardPositionsHUD.innerHTML = _0x2032c1);
      },
      'displayStats': function() {
        if (_0x2127b2.showStats) {
          var window = '';
          ogario.play && (_0x2127b2.showStatsMass && ogario.playerMass && (window += _0x5a1e0a.mass + ': ' + ogario.playerMass + ' | '), ogario.playerBestMass && (window += _0x5a1e0a.score + ': ' + ogario.playerBestMass), _0x2127b2.showStatsSTE && ogario.STE && (window += " | STE: " + ogario.STE), _0x2127b2.showStatsN16 && ogario.playerCellsMass && (window += " | " + ogario.playerCellsMass.length + "/16"), _0x2127b2.showStatsFPS && (window += " | ")), _0x2127b2.showStatsFPS && (window += 'FPS: ' + this.rFps), this.statsHUD.textContent = window;
          var _0xa6f1aa = this;
          setTimeout(function() {
            _0xa6f1aa.displayStats();
          }, 0xfa);
        } else jQuery("#stats-hud")["hide"]();
      },
      'displayTime': function() {
        if (_0x2127b2.showTime) {
          var window = new Date()['toLocaleString']();
          this.timeHUD.textContent = window;
          var ogario = this;
          setTimeout(function() {
            ogario.displayTime();
          }, 0x3e8);
        } else jQuery("#time-hud")['hide']();
      },
      'displayParties': function() {
        for (var window = '', ogario = 0x0; ogario < this.parties.length; ogario++) window += "<li><a href="http://agar.io/#" + this.parties[ogario] + "" onclick="$('#party-token').val('" + this.parties[ogario] + '\'); $(\'#join-party-btn-2\').click();\">http://agar.io/#' + this.parties[ogario] + "</a></li>";
        this.activeParties.className = '' === window ? 'no-parties' : '', this.activeParties.innerHTML = window;
      },
      'displayTop5': function() {
        if (_0x2127b2.showTop5) {
          for (var window = '', jQuery = 0x0, _0xd2cc73 = this.top5.length, _0x229f15 = 0x0; _0x229f15 < _0xd2cc73; _0x229f15++) jQuery += this.top5[_0x229f15]["mass"], _0x229f15 >= this.top5limit || (window += '<li>', _0x2127b2.showTargeting && (window += "<a href="#" data-user-id="" + this.top5[_0x229f15]['id'] + "" class="set-target ogicon-target"></a> "), window += "<span class="top5-mass-color">[" + this.top5[_0x229f15]["mass"] + ']</span> ' + this.escapeHTML(this.top5[_0x229f15]['nick']) + "</li>");
          this.top5pos.innerHTML = window, ogario.play && ogario.playerMass && (jQuery += ogario.playerMass, _0xd2cc73++);
          var _0x2b9553 = jQuery < 0x3e8 ? jQuery : Math.round(jQuery / 0x64) / 0xa + 'k';
          this.top5totalMass.textContent = _0x2b9553, this.top5totalPlayers.textContent = _0xd2cc73;
        }
      },
      'setTop5limit': function(_0x55a55b) {
        _0x55a55b && (this.top5limit = _0x55a55b);
      },
      'displayChatHistory': function(_0x2629b8) {
        if (_0x2629b8) {
          this.clearChatHistory(!0x0);
          for (var ogario = 0x0; ogario < this.chatHistory.length; ogario++) jQuery("#messages")["append"]('<li><span class=\"message-nick\">' + this.chatHistory[ogario]['nick'] + ": </span><span class="message-text">" + this.chatHistory[ogario]["message"] + "</span></li>");
        } else this.clearChatHistory(!0x1);
      },
      'clearChatHistory': function(_0x2c39ab) {
        jQuery("#messages")["empty"](), _0x2c39ab && (toastr.clear(), _0x2127b2.showChatBox && (jQuery("#chat-box .message")["remove"](), this.chatHistory.length = 0x0));
      },
      'displayChatInfo': function(_0x47bd68, _0x32278a) {
        _0x47bd68 ? toastr.info(_0x5a1e0a[_0x32278a + 'A']) : toastr.error(_0x5a1e0a[_0x32278a + 'B']);
      },
      'setDisableChat': function() {
        _0x2127b2.hideChat = _0x2127b2.disableChat, this.setHideChat();
      },
      'hideChat': function() {
        _0x2127b2.hideChat = !_0x2127b2.hideChat, this.setHideChat(), this.displayChatInfo(!_0x2127b2.hideChat, "hideChatMsg");
      },
      'setHideChat': function() {
        _0x2127b2.hideChat && jQuery('#message-box')["hide"](), this.setShowChatBox();
      },
      'setShowChatBox': function() {
        !_0x2127b2.hideChat && _0x2127b2.showChatBox ? jQuery("#chat-box")["show"]() : jQuery("#chat-box")['hide']();
      },
      'enterChatMessage': function() {
        var window = jQuery("#message-box"),
          _0x4738d0 = jQuery('#message');
        if (window.is(":visible")) {
          var _0xccfe09 = _0x4738d0.val();
          _0xccfe09.length ? (this.sendChatMessage(0x65, _0xccfe09), ogario.play && (_0x4738d0.blur(), window.hide())) : (_0x4738d0.blur(), window.hide()), _0x4738d0.val('');
        } else window.show(), _0x4738d0.focus(), _0x4738d0.val('');
      },
      'showMenu': function() {
        window.MC && window.MC.showNickDialog(0x12c), jQuery("#oferwallContainer")['is'](":visible") && window.closeOfferwall(), jQuery("#videoContainer")['is'](':visible') && window.closeVideoContainer();
      },
      'escapeHTML': function(_0xc8a7af) {
        return String(_0xc8a7af)["replace"](/[&<>"'\/]/g, function(_0x126ea4) {
          return _0x315c0c[_0x126ea4];
        });
      },
      'checkSkinURL': function(_0x23eead) {
        return /^https?:\/\/i\.(?:imgur|hizliresim)\.com\/\w{6,8}\.(?:jpg|jpeg|png)\??\d*$/i ["test"](_0x23eead) ? _0x23eead : '';
      },
      'loadSettings': function() {
        var jQuery = null;
        for (var _0x31e42a in null !== window.localStorage.getItem("ogarioSettings") && (jQuery = JSON.parse(window.localStorage.getItem("ogarioSettings"))), _0x2127b2) _0x2127b2.hasOwnProperty(_0x31e42a) && (jQuery && jQuery.hasOwnProperty(_0x31e42a) && (_0x2127b2[_0x31e42a] = jQuery[_0x31e42a]), ogario.hasOwnProperty(_0x31e42a) && (ogario[_0x31e42a] = _0x2127b2[_0x31e42a]));
      },
      'saveSettings': function(_0x10dee3, _0xef4c80) {
        window.localStorage.setItem(_0xef4c80, JSON.stringify(_0x10dee3));
      },
      'exportSettings': function() {
        var window = {
          'ogarioCommands': _0x5c099a,
          'ogarioHotkeys': _0x143d28,
          'ogarioPlayerProfiles': _0x2ace8d,
          'ogarioSettings': _0x2127b2,
          'ogarioThemeSettings': _0x39e92b
        };
        for (var ogario in window) {
          if (window.hasOwnProperty(ogario)) jQuery("#export-" + ogario)['prop']("checked") || delete window[ogario];
        }
        window = JSON.stringify(window), jQuery('#export-settings')["val"](window), jQuery("#import-settings")['val'](''), window = null;
      },
      'importSettings': function() {
        jQuery('#import-settings')["blur"]();
        var ogario = jQuery("#import-settings")['val']();
        if (ogario) {
          for (var _0x49a429 in ogario = JSON.parse(ogario))
            if (ogario.hasOwnProperty(_0x49a429)) {
              if (!jQuery('#import-' + _0x49a429)['prop']("checked")) continue;
              window.localStorage.setItem(_0x49a429, JSON.stringify(ogario[_0x49a429]));
            }
          window.location.reload();
        }
      },
      'restoreSettings': function() {
        null !== window.localStorage.getItem("ogarioSettings") && (window.localStorage.removeItem("ogarioSettings"), window.location.reload());
      },
      'setSettings': function(_0x3e2a73, _0x2e169a) {
        if (_0x2127b2.hasOwnProperty(_0x3e2a73) && null !== _0x2e169a) {
          switch (_0x2127b2[_0x3e2a73] = _0x2e169a, ogario.hasOwnProperty(_0x3e2a73) && (ogario[_0x3e2a73] = _0x2e169a), _0x3e2a73) {
            case "autoResp":
              this.setAutoResp();
              break;
            case "showMiniMap":
              this.setMiniMap();
              break;
            case 'showMiniMapGrid':
              this.resetMiniMapSectors();
              break;
            case "disableChat":
              this.setDisableChat();
              break;
            case 'chatSounds':
              this.setChatSoundsBtn();
              break;
            case "showChatBox":
              this.setShowChatBox();
              break;
            case "showTop5":
              this.setTop5();
              break;
            case "showTargeting":
              this.setTargetingHUD();
              break;
            case "showTime":
              this.displayTime(), jQuery("#time-hud")["show"]();
              break;
            case 'centeredLb':
              this.setCenteredLb();
              break;
            case "normalLb":
              this.setNormalLb();
              break;
            case "fpsAtTop":
              this.setFpsAtTop();
              break;
            case "showStats":
              this.displayStats(), jQuery('#stats-hud')["show"]();
              break;
            case "blockPopups":
              this.setBlockPopups();
          }
          this.saveSettings(_0x2127b2, 'ogarioSettings');
        }
      },
      'loadProfiles': function() {
        if (null !== window.localStorage.getItem("ogarioPlayerProfiles")) _0x2ace8d = JSON.parse(window.localStorage.getItem('ogarioPlayerProfiles'));
        else
          for (var ogario = 0x0; ogario < 0xa; ogario++) _0x2ace8d.push({
            'nick': "Profile #" + (ogario + 0x1),
            'clanTag': '',
            'skinURL': '',
            'color': _0x39e92b.mainColor
          });
        null !== window.localStorage.getItem("ogarioSelectedProfile") && (this.selectedProfile = JSON.parse(window.localStorage.getItem("ogarioSelectedProfile"))), _0x234c62.nick = _0x2ace8d[this.selectedProfile]["nick"], _0x234c62.clanTag = _0x2ace8d[this.selectedProfile]["clanTag"], _0x234c62.skinURL = _0x2ace8d[this.selectedProfile]["skinURL"], _0x234c62.color = _0x2ace8d[this.selectedProfile]["color"];
      },
      'changeSkinPreview': function(_0x47a707, _0x39809f) {
        _0x47a707 && _0x39809f && ('skin-preview' === _0x39809f ? (jQuery("#skin-preview")["removeClass"]("default")["append"]('<a href=\"#\" id=\"skin-popover\" data-toggle=\"popover\" title=\"\" data-html=\"true\" data-content=\"<img src=\'' + _0x47a707.src + "' width='500'>"></a>"), jQuery("#skin-popover")['append'](jQuery(_0x47a707)['fadeIn'](0x3e8)), jQuery("#skin-popover")["popover"]()) : jQuery('#' + _0x39809f)["removeClass"]("default")['append'](jQuery(_0x47a707)["fadeIn"](0x3e8)));
      },
      'setSkinPreview': function(_0x469d1f, _0x532dba) {
        if (jQuery('#' + _0x532dba)["empty"]()["addClass"]("default"), _0x469d1f && 0x0 != _0x469d1f.length) {
          var _0x47dba8 = this,
            _0x315ee1 = new Image();
          _0x315ee1.crossOrigin = "Anonymous", _0x315ee1.onload = function() {
            _0x47dba8.changeSkinPreview(_0x315ee1, _0x532dba);
          }, _0x315ee1.src = _0x469d1f;
        }
      },
      'setProfile': function() {
        var window = (_0x2ace8d.length + this.selectedProfile - 0x1) % _0x2ace8d.length,
          ogario = (this.selectedProfile + 0x1) % _0x2ace8d.length;
        this.setSkinPreview(_0x2ace8d[window]["skinURL"], 'prev-profile'), this.setSkinPreview(_0x2ace8d[this.selectedProfile]['skinURL'], "skin-preview"), this.setSkinPreview(_0x2ace8d[ogario]['skinURL'], "next-profile"), this.saveSettings(this.selectedProfile, "ogarioSelectedProfile"), jQuery("#nick")["val"](_0x2ace8d[this.selectedProfile]["nick"]), jQuery('#clantag')['val'](_0x2ace8d[this.selectedProfile]['clanTag']), jQuery("#skin")["val"](_0x2ace8d[this.selectedProfile]["skinURL"]), jQuery("#color")["val"](_0x2ace8d[this.selectedProfile]['color']), jQuery(".skin")["colorpicker"]('setValue', _0x2ace8d[this.selectedProfile]['color']), jQuery("#skins a")["removeClass"]("selected"), jQuery("#skins a[data-profile='" + this.selectedProfile + '\']')['addClass']('selected');
      },
      'prevProfile': function() {
        this.setPlayerSettings(), this.selectedProfile = (_0x2ace8d.length + this.selectedProfile - 0x1) % _0x2ace8d.length, this.setProfile();
      },
      'nextProfile': function() {
        this.setPlayerSettings(), this.selectedProfile = (this.selectedProfile + 0x1) % _0x2ace8d.length, this.setProfile();
      },
      'selectProfile': function(_0x3fcfac) {
        this.setPlayerSettings(), this.selectedProfile = parseInt(_0x3fcfac), this.setProfile();
      },
      'addOption': function(_0x10fb78, _0x48cb9c, _0xd6dc9a, _0x544539) {
        jQuery(_0x10fb78)["append"]('<label><input type=\"checkbox\" id=\"' + _0x48cb9c + "" class="js-switch"> " + _0xd6dc9a + "</label>"), jQuery('#' + _0x48cb9c)["prop"]("checked", _0x544539);
      },
      'addOptions': function(_0x37bcd3, _0x7cfa9d) {
        if (_0x37bcd3) {
          jQuery("#og-options")["append"]("<div class="options-box " + _0x7cfa9d + ""><h5 class="menu-main-color">" + _0x5a1e0a[_0x7cfa9d] + "</h5></div>");
          for (var _0xcb59b0 = 0x0; _0xcb59b0 < _0x37bcd3.length; _0xcb59b0++) {
            var _0x34a0c6 = _0x37bcd3[_0xcb59b0];
            _0x2127b2.hasOwnProperty(_0x34a0c6) && (jQuery('.' + _0x7cfa9d)["append"]("<label>" + _0x5a1e0a[_0x34a0c6] + " <input type="checkbox" class="js-switch" id="" + _0x34a0c6 + ""></label>"), jQuery('#' + _0x34a0c6)["prop"]("checked", _0x2127b2[_0x34a0c6]));
          }
        }
      },
      'addInputBox': function(_0x1d76c5, _0x4a3265, _0x46088c, _0x44ef0e) {
        jQuery(_0x1d76c5)['append']("<div class="input-box"><span class="title-box">" + _0x5a1e0a[_0x4a3265] + "</span><input id="" + _0x4a3265 + "" class="form-control" placeholder="" + _0x46088c + "" value="" + _0x2127b2[_0x4a3265] + "" /></div>");
        var _0x11280d = this;
        jQuery('#' + _0x4a3265)['on']("input", function() {
          _0x2127b2[_0x4a3265] = this.value, _0x11280d[_0x44ef0e](), _0x11280d.saveSettings(_0x2127b2, 'ogarioSettings');
        });
      },
      'addSliderBox': function(_0x4997bd, _0x10776a, _0x44f1d0, _0x21820d, _0x28e5d9, _0x21f20f) {
        jQuery(_0x4997bd)['append']("<div class="slider-box"><div class="box-label"><span class="value-label">" + _0x5a1e0a[_0x10776a] + ': </span><span id=\"' + _0x10776a + "-value" class="value">" + _0x2127b2[_0x10776a] + "</span></div><input id="" + _0x10776a + "-slider" type="range" min="" + _0x44f1d0 + "" max="" + _0x21820d + "" step="" + _0x28e5d9 + "" value="" + _0x2127b2[_0x10776a] + ""></div>");
        var _0x4a1967 = this;
        _0x21f20f ? jQuery('#' + _0x10776a + "-slider")['on']("input", function() {
          var _0x4997bd = parseFloat(jQuery(this)["val"]());
          jQuery('#' + _0x10776a + "-value")["text"](_0x4997bd), _0x2127b2[_0x10776a] = _0x4997bd, ogario.hasOwnProperty(_0x10776a) && (ogario[_0x10776a] = _0x4997bd), _0x4a1967[_0x21f20f](), _0x4a1967.saveSettings(_0x2127b2, "ogarioSettings");
        }) : jQuery('#' + _0x10776a + '-slider')['on']("input", function() {
          var _0x4997bd = parseFloat(jQuery(this)["val"]());
          jQuery('#' + _0x10776a + "-value")["text"](_0x4997bd), _0x2127b2[_0x10776a] = _0x4997bd, ogario.hasOwnProperty(_0x10776a) && (ogario[_0x10776a] = _0x4997bd), _0x4a1967.saveSettings(_0x2127b2, "ogarioSettings");
        });
      },
      'setLang': function() {
        if ('pl' === _0x50a51f && window.i18n_dict && window.i18n_dict.en)
          for (var ogario in window.i18n_dict.en) window.i18n_dict.en.hasOwnProperty(ogario) && _0x5a1e0a.hasOwnProperty(ogario) && (window.i18n_dict.en[ogario] = _0x5a1e0a[ogario]);
      },
      'setMenu': function() {
        for (var window in document.title = this.name, jQuery("#mainPanel")["before"]("<div id="exp-bar" class="agario-panel"><span class="ogicon-user"></span><div class="agario-exp-bar progress"><span class="progress-bar-text">0/50</span><div class="progress-bar progress-bar-striped" style="width: 0%;"></div></div><div class="progress-bar-star">1</div></div><div id="main-menu" class="agario-panel"><ul class="menu-tabs"><li class="start-tab active"><a href="#main-panel" class="active ogicon-home" data-toggle="tab-tooltip" title="" + _0x5a1e0a.start + ""></a></li><li class="profile-tab"><a href="#profile" class="ogicon-user" data-toggle="tab-tooltip" title="" + _0x5a1e0a.profile + ""></a></li><li class="settings-tab"><a href="#og-settings" class="ogicon-cog" data-toggle="tab-tooltip" title="" + _0x5a1e0a.settings + ""></a></li><li class="theme-tab"><a href="#theme" class="ogicon-droplet" data-toggle="tab-tooltip" title="" + _0x5a1e0a.theme + ""></a></li><li class="hotkeys-tab"><a href="#" class="hotkeys-link ogicon-keyboard" data-toggle="tab-tooltip" title="" + _0x5a1e0a.hotkeys + ""></a></li><li class="music-tab"><a href="#music" class="ogicon-music" data-toggle="tab-tooltip" title="Radio / " + _0x5a1e0a.sounds + ""></a></li></ul><div id="main-panel" class="menu-panel"></div><div id="profile" class="menu-panel"></div><div id="og-settings" class="menu-panel"><div class="submenu-panel"></div></div><div id="theme" class="menu-panel"></div><div id="music" class="menu-panel"></div></div>"), jQuery("#main-panel")["append"]("<a href="#" class="quick quick-menu ogicon-menu"></a><a href="#" class="quick quick-skins ogicon-images"></a><div id="profiles"><div id="prev-profile"></div><div id="skin-preview"></div><div id="next-profile"></div></div>"), jQuery("#mainPanel div[role=form]")["appendTo"](jQuery("#main-panel")), jQuery("#main-panel div[role=form] .form-group:first")["remove"](), jQuery("#nick")['before']("<input id="clantag" class="form-control" placeholder="Tag, e.g. Ⓜ" maxlength="10"><div class="input-group nick"></div>"), jQuery('#nick')["appendTo"](jQuery(".nick")), jQuery('.nick')['append']("<span class="input-group-btn"><button id="stream-mode" class="btn active ogicon-eye"></button></span>"), jQuery('.nick')["after"]("<div class="input-group skin"><input id="skin" class="form-control" placeholder="Skin URL (imgur.com direct link)" maxlength="40"><input type="hidden" id="color" value="" + _0x234c62.color + "" maxlength="7" /><span class="input-group-addon"><i></i></span><span class="input-group-btn"><button id="hide-url" class="btn active ogicon-eye"></button></span></div>"), jQuery("#locationKnown, #locationUnknown")["insertAfter"](jQuery(".skin")), jQuery("#region")["before"]("<button class="btn btn-warning btn-server-info ogicon-cogs"></button>"), jQuery('.btn-spectate, .btn-logout')["appendTo"]("#agario-main-buttons"), jQuery("#agario-main-buttons")["addClass"]('clearfix')["before"]('<div id=\"server-info\" class=\"form-group clearfix\"><input id=\"server-ws\" class=\"form-control\" placeholder=\"Server WS\"><button id=\"server-connect\" class=\"btn btn-success ogicon-power\"></button><button id=\"server-reconnect\" class=\"btn btn-primary ogicon-redo2\"></button><input id=\"server-token\" class=\"form-control\" placeholder=\"Server token\"><button id=\"server-join\" class=\"btn btn-success\" data-itr=\"page_join_party\">Join</button></div>'), jQuery("#helloContainer div[role=form]")['after']("<div id="ogario-party" class="clearfix"><input id="party-token" class="form-control" placeholder="Party token"></div>"), jQuery('#ogario-party')["append"]("<button id="join-party-btn-2" class="btn btn-success" data-itr="page_join_party">Join</button><button id="create-party-btn-2" class="btn btn-primary" data-itr="page_create_party">Create</button>"), jQuery('#pre-join-party-btn:first, #join-party-btn:first, #create-party-btn:first, #leave-party-btn:first, #joinPartyToken:first, .party-icon-back:first')["appendTo"](jQuery('#ogario-party')), jQuery("#settingsChoice, #options")["appendTo"](jQuery("#og-settings .submenu-panel")), jQuery('#stats')['appendTo'](jQuery("#main-menu"))["addClass"]("menu-panel"), jQuery("#statsContinue")["attr"]('id', "statsContinue2"), jQuery("#mainPanel")["empty"]()['remove'](), jQuery('.center-container')["addClass"]("ogario-menu"), jQuery(".center-container")["append"]('<div id=\"menu-footer\" class=\"menu-main-color\">' + _0x5a1e0a.visit + " <a href="http://ogario.ovh" target="_blank">ogario.ovh</a> | " + this.version + " <a href="https://goo.gl/zze9Fj" class="release ogicon-info" target="_blank"></a></div>"), jQuery("#menu-footer")["css"]("position", "relative")['prepend']("<div style="position:absolute;left:4px"><a href="http://ogario.ovh" target="_blank">Try v4 Beta</a></div>"), jQuery("#leftPanel, #rightPanel")['addClass']("ogario-menu")["removeAttr"]('id'), jQuery("#profile")["append"]('<div id=\"block-warn\">' + _0x5a1e0a.blockWarn + '<br><a href=\"#\" id=\"unblock-popups\">' + _0x5a1e0a.unblockPopups + '</a></div>'), jQuery('.agario-profile-panel, .agario-panel-freecoins, .agario-panel-gifting, .agario-shop-panel, #dailyquests-panel')["appendTo"](jQuery("#profile"))["removeClass"]('agario-side-panel'), jQuery("#exp-bar")["addClass"]("agario-profile-panel"), jQuery(".left-container")["empty"](), jQuery(".agario-shop-panel")["after"]("<div class="agario-panel ogario-yt-panel"><h5 class="menu-main-color">Team OGARio (tag: Ⓜ)</h5><div class="g-ytsubscribe" data-channelid="UCaWiPNJWnhzYDrBQoXokn6w" data-layout="full" data-theme="dark" data-count="default"></div></div>"), jQuery('#tags-container')["appendTo"](jQuery("#profile")), jQuery('.btn-logout')["appendTo"](jQuery('#profile')), jQuery(".left-container")["append"]("<div id="quick-menu" class="agario-panel agario-side-panel"><a href="#" class="quick-shop ogicon-cart" data-toggle="tab-tooltip" data-placement="left" title="" + _0x5a1e0a.page_shop + ""></a><a href="#" class="quick-free-coins ogicon-coin-dollar" data-toggle="tab-tooltip" data-placement="left" title="" + _0x5a1e0a.page_menu_main_free_coins + ""></a><a href="#" class="quick-free-gifts ogicon-gift" data-toggle="tab-tooltip" data-placement="left" title="" + _0x5a1e0a.page_menu_main_gifts + ""></a><a href="#" class="quick-quests ogicon-trophy" data-toggle="tab-tooltip" data-placement="left" title="" + _0x5a1e0a.page_menu_main_dailyquests + ""></a><a href="http://ogario.ovh/skins/" class="quick-more-skins ogicon-grin" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="" + _0x5a1e0a.skins + ""></a><a href="http://youtube.com/channel/UCaWiPNJWnhzYDrBQoXokn6w" class="quick-yt ogicon-youtube2" target="_blank" data-toggle="tab-tooltip" data-placement="left" title="Team OGARio"></a></div>"), jQuery(".party-dialog, .partymode-info")["remove"](), jQuery(".agario-party-6")["appendTo"](jQuery(".center-container")), jQuery('.right-container')["empty"](), jQuery(".right-container")["append"]("<div class="agario-party"></div>"), jQuery(".agario-party-6")['appendTo'](jQuery(".agario-party"))["addClass"]("agario-panel agario-side-panel"), jQuery(".agario-party h4, #cancel-party-btn")["remove"](), jQuery(".agario-party .btn")['addClass']("btn-sm"), jQuery(".right-container")['append']('<div id=\"skins-panel\" class=\"agario-panel agario-side-panel\"><div id=\"skins\"></div><a href=\"http://ogario.ovh/skins/\" id=\"more-skins\" class=\"btn btn-block btn-success\" target=\"_blank\">' + _0x5a1e0a.moreSkins + "</a></div>"), jQuery(".btn-settings, .text-muted, .tosBox, .agario-promo, #agario-web-incentive, span[data-itr='page_option_dark_theme'], #options #darkTheme, [id*='auxfield']")["remove"](), jQuery('#advertisement, #adbg, #a320x250, #g320x250, #s320x250, #adsBottom')["css"]("display", "none"), jQuery("#advertisement")["removeClass"]("agario-panel"), jQuery("#adsBottom")["css"]({
            'z-index': '1',
            'opacity': '0',
            'bottom': '-100px'
          }), jQuery("#noNames, #showMass")["remove"](), jQuery('#og-settings .submenu-panel')["append"]('<div id=\"og-options\"></div>'), this.addOptions([], 'animationGroup'), this.addOptions(["autoZoom"], 'zoomGroup'), this.addOptions(['quickResp', "autoResp"], "respGroup"), this.addOptions(["noNames", "optimizedNames", "autoHideNames", 'hideMyName', "hideTeammatesNames", 'namesStroke'], "namesGroup"), this.addOptions(["showMass", "optimizedMass", 'autoHideMass', 'hideMyMass', "hideEnemiesMass", "shortMass", "virMassShots", "massStroke"], "massGroup"), this.addOptions(['customSkins', "vanillaSkins"], 'skinsGroup'), this.addOptions(["optimizedFood", "autoHideFood", "autoHideFoodOnZoom", 'rainbowFood'], "foodGroup"), this.addOptions(["myCustomColor", "myTransparentSkin", "transparentSkins", 'transparentCells', 'transparentViruses'], "transparencyGroup"), this.addOptions(['showGrid', "showBgSectors", "showMapBorders"], "gridGroup"), this.addOptions(["disableChat", "chatSounds", "chatEmoticons", "showChatImages", "showChatVideos", 'showChatBox'], "chatGroup"), this.addOptions(["showMiniMap", "showMiniMapGrid", "showMiniMapGuides", "oneColoredTeammates"], "miniMapGroup"), this.addOptions(["oppColors", "oppRings", "virColors", "splitRange", "virusesRange", "cursorTracking", "teammatesInd"], 'helpersGroup'), this.addOptions(["mouseSplit", "mouseFeed", 'mouseInvert'], "mouseGroup"), this.addOptions(["showTop5", 'showTargeting', "centeredLb", 'normalLb', "fpsAtTop"], "hudGroup"), this.addOptions(['showStats', "showStatsMass", 'showStatsSTE', "showStatsN16", "showStatsFPS", "showTime"], "statsGroup"), this.addOptions(["blockPopups"], "extrasGroup"), jQuery("#noSkins, #noColors, #skipStats, #showQuest, #playArenaSounds, #playMenuSounds")["addClass"]("js-switch-vanilla"), jQuery('.skinsGroup h5')["after"]("<label class="noSkins">" + _0x5a1e0a.noSkins + ' </label>'), jQuery("#noSkins")["appendTo"](jQuery(".noSkins")), jQuery('.transparencyGroup h5')["after"]("<label class="noColors">" + _0x5a1e0a.noColors + " </label>"), jQuery("#noColors")['appendTo'](jQuery(".noColors")), jQuery(".extrasGroup h5")["after"]("<label class="skipStats">" + _0x5a1e0a.skipStats + " </label>"), jQuery('#skipStats')["appendTo"](jQuery(".skipStats")), jQuery(".skipStats")["after"]("<label class="showQuest">" + _0x5a1e0a.showQuest + " </label>"), jQuery("#showQuest")["appendTo"](jQuery(".showQuest")), jQuery('.showQuest')["after"]("<label class="playArenaSounds">" + _0x5a1e0a.playArenaSounds + " </label>"), jQuery('#playArenaSounds')['appendTo'](jQuery(".playArenaSounds")), jQuery(".playArenaSounds")["after"]("<label class="playMenuSounds">" + _0x5a1e0a.playMenuSounds + " </label>"), jQuery("#playMenuSounds")["appendTo"](jQuery(".playMenuSounds")), jQuery('#options')["remove"](), jQuery("#settingsChoice")['appendTo'](jQuery('.extrasGroup'))["addClass"]('select-wrapper'), this.addSliderBox(".animationGroup", "animation", 0x64, 0xc8, 0x1), this.addSliderBox(".zoomGroup", "zoomSpeedValue", 0.75, 0.99, 0.01), jQuery("#og-settings")["append"]("<button class="btn btn-block btn-success btn-export">" + _0x5a1e0a.exportImport + "</button>"), jQuery('#og-settings')["append"]("<div class="restore-settings"><a href="#">" + _0x5a1e0a.restoreSettings + "</a></div>"), jQuery("#music")["append"]("<div class="agario-panel radio-panel"><h5 class="menu-main-color">Radio (" + _0x5a1e0a.thanks + ")</h5><audio src="http://frshoutcast.comunicazion.eu:8815/;" controls></audio><span class="playlist"><span class="ogicon-file-music"></span> <a href="http://frshoutcast.comunicazion.eu:8815/played.html?sid=1" target="_blank">" + _0x5a1e0a.playlist + "</a></span></div>"), jQuery("#music")["append"]('<div class=\"agario-panel sounds-panel\"><h5 class=\"menu-main-color\">' + _0x5a1e0a.sounds + "</h5></div>"), jQuery("#music")["append"]('<div class=\"agario-panel ogario-yt-panel\"><h5 class=\"menu-main-color\">Team OGARio (tag: Ⓜ)</h5><div class=\"g-ytsubscribe\" data-channelid=\"UCaWiPNJWnhzYDrBQoXokn6w\" data-layout=\"full\" data-theme=\"dark\" data-count=\"default\"></div></div>'), this.addInputBox(".sounds-panel", "messageSound", "Sound URL", "setMessageSound"), this.addInputBox(".sounds-panel", "commandSound", "Sound URL", "setCommandSound"), jQuery("body")["append"]('<div id=\"overlays-hud\"><div id=\"stats-hud\" class=\"hud stats-hud-color\"></div> <div id=\"top5-hud\" class=\"hud\"><h5 class=\"hud-main-color\">Team top <span class=\"team-top\">5</span></h5><div class=\"hud-main-color team-top-menu\"><a href=\"#\" data-limit=\"5\" class=\"team-top-limit active\">5</a> | <a href=\"#\" data-limit=\"10\" class=\"team-top-limit\">10</a> | <a href=\"#\" data-limit=\"100\" class=\"team-top-limit\">100</a></div><ol id=\"top5-pos\"></ol><div id=\"top5-total\"><span class=\"hud-main-color ogicon-users\"></span> ' + _0x5a1e0a.totalPartyPlayers + ": <span id="top5-total-players" class="top5-mass-color">0</span><br><span class="hud-main-color ogicon-pacman"></span> " + _0x5a1e0a.totalPartyMass + ": <span id="top5-total-mass" class="top5-mass-color">0</span></div></div> <div id="time-hud" class="hud time-hud-color"></div> <div id="pause-hud" class="hud">" + _0x5a1e0a.pause + "</div> <div id="leaderboard-hud" class="hud-b"><h4 class="hud-main-color">ogario.ovh</h4><div id="leaderboard-positions"></div></div> <div id="minimap-hud" class="hud-b"><canvas id="minimap-sectors"></canvas><canvas id="minimap"></canvas></div><div id="target-hud" class="hud"><div id="target-player"><span id="target-skin"><img src=""> </span><span id="target-nick"></span> <span id="target-status" class="hud-main-color">[" + _0x5a1e0a.targetNotSet + "]</span></div><div id="target-summary"></div></div><div id="target-panel-hud" class="hud"><a href="#" id="set-targeting" class="ogicon-target"></a><a href="#" id="set-private-minimap" class="ogicon-location2"></a><a href="#" id="cancel-targeting" class="ogicon-cancel-circle"></a><a href="#" id="change-target" class="ogicon-arrow-right"></a></div> <div id="quest-hud" class="hud"></div></div>"), jQuery('body')["append"]("<ul id="messages"></ul>"), jQuery('body')['append']("<div id="message-box"><div id="chat-emoticons"></div><div id="message-menu"><a href="#" class="chat-sound-notifications ogicon-volume-high"></a><a href="#" class="chat-active-users ogicon-user-check"></a><a href="#" class="chat-muted-users ogicon-user-minus"></a><a href="#" class="show-chat-emoticons ogicon-smile"></a></div><input type="text" id="message" class="form-control" placeholder="" + _0x5a1e0a.enterChatMsg + '...\" maxlength=\"80\"></div>'), jQuery("body")['append']('<div id=\"chat-box\"></div>'), _0x44408e) _0x44408e.hasOwnProperty(window) && jQuery("#chat-emoticons")["append"]("<img src="http://cdn.ogario.ovh/static/emoticons/" + _0x44408e[window] + '\" alt=\"' + window + "" class="emoticon">");
        jQuery('body')["append"]("<div id="exp-imp"><div id="exp-imp-menu"><button id="close-exp-imp" class="btn btn-danger">" + _0x5a1e0a.close + "</button></div><div id="exp-imp-settings"></div></div>"), jQuery("#exp-imp-settings")['append']("<h1>" + _0x5a1e0a.exportSettings + '</h1><h2>' + _0x5a1e0a.exportInfo + "</h2>"), this.addOption("#exp-imp-settings", "export-ogarioCommands", _0x5a1e0a.commands, !0x0), this.addOption("#exp-imp-settings", "export-ogarioHotkeys", _0x5a1e0a.hotkeys, !0x0), this.addOption("#exp-imp-settings", "export-ogarioPlayerProfiles", _0x5a1e0a.profiles, !0x0), this.addOption("#exp-imp-settings", 'export-ogarioSettings', _0x5a1e0a.settings, !0x0), this.addOption("#exp-imp-settings", "export-ogarioThemeSettings", _0x5a1e0a.theme, !0x0), jQuery("#exp-imp-settings")["append"]("<textarea id="export-settings" class="form-control" rows="14" cols="100" spellcheck="false" readonly /><button id="export-settings-btn" class="btn btn-block btn-success">" + _0x5a1e0a.exportSettings + "</button>"), jQuery("#exp-imp-settings")['append']("<h1>" + _0x5a1e0a.importSettings + '</h1><h2>' + _0x5a1e0a.importInfo + '</h2>'), this.addOption("#exp-imp-settings", "import-ogarioCommands", _0x5a1e0a.commands, !0x0), this.addOption('#exp-imp-settings', "import-ogarioHotkeys", _0x5a1e0a.hotkeys, !0x0), this.addOption("#exp-imp-settings", "import-ogarioPlayerProfiles", _0x5a1e0a.profiles, !0x0), this.addOption("#exp-imp-settings", "import-ogarioSettings", _0x5a1e0a.settings, !0x0), this.addOption("#exp-imp-settings", "import-ogarioThemeSettings", _0x5a1e0a.theme, !0x0), jQuery("#exp-imp-settings")["append"]("<textarea id="import-settings" class="form-control" rows="14" cols="100" spellcheck="false" /><button id="import-settings-btn" class="btn btn-block btn-success">" + _0x5a1e0a.importSettings + '</button>'), _0x45d8fa && _0x45d8fa.setThemeMenu();
        for (var ogario = 0x0; ogario < _0x2ace8d.length; ogario++) jQuery("#skins")["append"]("<div class="skin-box"><a href="#profile-" + ogario + "" id="profile-" + ogario + "" data-profile="" + ogario + ""></a></div>"), this.setSkinPreview(_0x2ace8d[ogario]["skinURL"], "profile-" + ogario), ogario == this.selectedProfile && jQuery("#profile-" + ogario)["addClass"]('selected');
      },
      'setUI': function() {
        var _0x4f69e9 = this;
        jQuery(document)['on']("click", ".menu-tabs a", function(_0x2067b7) {
          _0x2067b7.preventDefault(), _0x4f69e9.switchMenuTabs(jQuery(this), "menu-panel");
        }), jQuery(document)['on']('click', ".submenu-tabs a", function(_0x3bfe36) {
          _0x3bfe36.preventDefault(), _0x4f69e9.switchMenuTabs(jQuery(this), "submenu-panel");
        }), jQuery(document)['on']("click", ".quick-menu", function(_0x4cda91) {
          _0x4cda91.preventDefault(), _0x2127b2.showQuickMenu = !_0x2127b2.showQuickMenu, _0x4f69e9.saveSettings(_0x2127b2, "ogarioSettings"), _0x4f69e9.setShowQuickMenu();
        }), jQuery(document)['on']("click", ".quick-skins", function(_0x2fceb9) {
          _0x2fceb9.preventDefault(), _0x2127b2.showSkinsPanel = !_0x2127b2.showSkinsPanel, _0x4f69e9.saveSettings(_0x2127b2, "ogarioSettings"), _0x4f69e9.setShowSkinsPanel();
        }), jQuery(document)['on']("change", '#region', function() {
          _0x4f69e9.region = this.value;
        }), jQuery(document)['on']('change', "#gamemode", function() {
          var window = this.value;
          ':party' !== window && _0x4f69e9.leaveParty(), _0x4f69e9.gameMode = ogario.gameMode = window, _0x4f69e9.setQuest();
        }), jQuery(document)['on']("change", "#quality", function() {
          _0x4f69e9.getQuality(this.value), _0x58f8a8();
        }), jQuery(document)['on']("input", '#skin', function() {
          var window = this.value;
          _0x4f69e9.setSkinPreview(window, "skin-preview"), _0x4f69e9.setSkinPreview(window, "profile-" + _0x4f69e9.selectedProfile);
        }), jQuery(document)['on']("click", "#skins a", function(_0x40a0a9) {
          _0x40a0a9.preventDefault(), _0x4f69e9.selectProfile(jQuery(this)["attr"]('data-profile'));
        }), jQuery(document)['on']("click", "#prev-profile", function() {
          _0x4f69e9.prevProfile();
        }), jQuery(document)['on']("click", "#next-profile", function() {
          _0x4f69e9.nextProfile();
        }), jQuery(document)['on']("click", "#stream-mode", function() {
          _0x2127b2.streamMode = !_0x2127b2.streamMode, _0x4f69e9.saveSettings(_0x2127b2, "ogarioSettings"), _0x4f69e9.setStreamMode();
        }), jQuery(document)['on']("click", '#hide-url', function() {
          _0x2127b2.hideSkinUrl = !_0x2127b2.hideSkinUrl, _0x4f69e9.saveSettings(_0x2127b2, "ogarioSettings"), _0x4f69e9.setHideSkinUrl();
        }), jQuery(document)['on']("click", ".btn-server-info", function() {
          jQuery("#server-info")['toggle']();
        }), jQuery(document)['on']("click", "#server-connect", function() {
          _0x4f69e9.gameServerConnect(jQuery("#server-ws")["val"]());
        }), jQuery(document)['on']("click", "#server-reconnect", function() {
          _0x4f69e9.gameServerReconnect();
        }), jQuery(document)['on']("click", "#server-join", function() {
          _0x4f69e9.gameServerJoin(jQuery("#server-token")["val"]());
        }), jQuery(document)['on']('change', "#og-options input[type='checkbox']", function() {
          var window = jQuery(this);
          _0x4f69e9.setSettings(window.attr('id'), window.prop("checked"));
        }), jQuery(document)['on']("change", ".js-switch-vanilla", function() {
          var window = jQuery(this),
            _0x2b0e5d = window.attr('id');
          void 0x0 !== _0x4f69e9[_0x2b0e5d] && (_0x4f69e9[_0x2b0e5d] = window.prop("checked"), "noSkins" === _0x2b0e5d && (ogario.showCustomSkins = !_0x4f69e9.noSkins), "showQuest" === _0x2b0e5d && _0x4f69e9.setQuest());
        }), jQuery(document)['on']("click", "#og-settings .restore-settings a", function(_0x51e2f9) {
          _0x51e2f9.preventDefault(), _0x4f69e9.restoreSettings();
        }), jQuery(document)['on']("click", '#og-settings .btn-export', function(_0x120a24) {
          _0x120a24.preventDefault(), _0x4f69e9.exportSettings(), jQuery("#exp-imp")["fadeIn"](0x1f4), jQuery('#exp-imp-settings, #export-settings')["perfectScrollbar"]('update');
        }), jQuery(document)['on']("click", "#close-exp-imp", function(_0x2657d7) {
          _0x2657d7.preventDefault(), jQuery("#exp-imp")["fadeOut"](0x1f4);
        }), jQuery(document)['on']('focus', "#export-settings", function() {
          jQuery(this)["select"]();
        }), jQuery(document)['on']('click', "#export-settings-btn", function(_0x374f52) {
          _0x374f52.preventDefault(), _0x4f69e9.exportSettings();
        }), jQuery(document)['on']("click", "#import-settings-btn", function(_0x9794cb) {
          _0x9794cb.preventDefault(), _0x4f69e9.importSettings();
        }), jQuery(document)['on']("click", "#unblock-popups", function(_0x419bd0) {
          _0x419bd0.preventDefault(), _0x4f69e9.unblockPopups();
        }), jQuery(document)['on']("click", "#openfl-overlay.disabler, #leagues-app .disabler, #leagues-app .leagues-inner-close", function() {
          _0x2127b2.blockPopups && _0x4f69e9.popupsForceUnblocked && _0x4f69e9.blockPopups();
        }), jQuery(document)['on']('click', "#openfl-content", function() {
          if (_0x2127b2.blockPopups && _0x4f69e9.popupsForceUnblocked) {
            var window = jQuery(this);
            setTimeout(function() {
              window.is(":visible") || _0x4f69e9.blockPopups();
            }, 0x3e8);
          }
        }), jQuery(document)['on']("click", ".quick-shop", function(_0x2fe479) {
          _0x2fe479.preventDefault(), _0x4f69e9.forceUnblockPopups(), window.MC && window.MC.openShop();
        }), jQuery(document)['on']('click', ".quick-free-coins", function(_0x204a36) {
          _0x204a36.preventDefault(), _0x4f69e9.forceUnblockPopups(), window.MC && window.MC.showFreeCoins();
        }), jQuery(document)['on']('click', '.quick-free-gifts', function(_0x2a7bc7) {
          _0x2a7bc7.preventDefault(), _0x4f69e9.forceUnblockPopups(), window.MC && window.MC.showGifting();
        }), jQuery(document)['on']("click", '.quick-quests', function(_0x5c08eb) {
          _0x5c08eb.preventDefault(), _0x4f69e9.forceUnblockPopups(), window.MC && window.MC.showQuests();
        }), jQuery(document)['on']("click", "#set-targeting", function(_0x537e9d) {
          _0x537e9d.preventDefault(), _0x4f69e9.setTargeting();
        }), jQuery(document)['on']('click', "#cancel-targeting", function(_0x1ae960) {
          _0x1ae960.preventDefault(), _0x4f69e9.cancelTargeting();
        }), jQuery(document)['on']("click", "#set-private-minimap", function(_0x19e5f7) {
          _0x19e5f7.preventDefault(), _0x4f69e9.setPrivateMiniMap();
        }), jQuery(document)['on']("click", "#change-target", function(_0x21b90e) {
          _0x21b90e.preventDefault(), _0x4f69e9.changeTarget();
        }), jQuery(document)['on']('click', '.team-top-limit', function(_0x40e622) {
          _0x40e622.preventDefault();
          var ogario = jQuery(this),
            _0x57e73c = parseInt(ogario.attr("data-limit"));
          _0x57e73c && (_0x4f69e9.setTop5limit(_0x57e73c), _0x4f69e9.displayTop5(), jQuery(".team-top")["text"](_0x57e73c), jQuery(".team-top-limit")["removeClass"]("active"), ogario.addClass("active"));
        }), jQuery(document)['on']("click", "#top5-pos .set-target", function(_0x5e41d1) {
          _0x5e41d1.preventDefault(), _0x4f69e9.setTarget(parseInt(jQuery(this)['attr']("data-user-id")));
        }), jQuery(document)['on']("click", ".mute-user", function(_0x12e983) {
          _0x12e983.preventDefault(), _0x4f69e9.muteChatUser(parseInt(jQuery(this)["attr"]("data-user-id")));
        }), jQuery(document)['on']("click", '.btn-mute-user', function() {
          var window = jQuery(this);
          _0x4f69e9.muteChatUser(parseInt(window.attr("data-user-id"))), window.removeClass("btn-red btn-mute-user")["addClass"]("btn-green btn-unmute-user")["text"](_0x5a1e0a.unmute);
        }), jQuery(document)['on']("click", ".btn-unmute-user", function() {
          var window = jQuery(this);
          _0x4f69e9.unmuteChatUser(parseInt(window.attr("data-user-id"))), window.removeClass("btn-green btn-unmute-user")["addClass"]('btn-red btn-mute-user')["text"](_0x5a1e0a.mute);
        }), jQuery(document)['on']("click", ".chat-sound-notifications", function(_0x1a721b) {
          _0x1a721b.preventDefault(), _0x2127b2.chatSounds = !_0x2127b2.chatSounds, _0x4f69e9.saveSettings(_0x2127b2, "ogarioSettings"), _0x4f69e9.setChatSoundsBtn();
        }), jQuery(document)['on']("click", ".chat-active-users", function(_0x222d91) {
          _0x222d91.preventDefault(), _0x4f69e9.displayChatActiveUsers();
        }), jQuery(document)['on']("click", ".chat-muted-users", function(_0x13d596) {
          _0x13d596.preventDefault(), _0x4f69e9.displayChatMutedUsers();
        }), jQuery(document)['on']("click", ".show-chat-emoticons", function(_0xa01cb4) {
          _0xa01cb4.preventDefault();
          var ogario = jQuery(this),
            _0x4a4e4c = jQuery("#chat-emoticons");
          _0x4a4e4c.toggle(), _0x4a4e4c.is(":visible") ? ogario.addClass('active') : (ogario.removeClass('active'), jQuery("#message")["focus"]());
        }), jQuery(document)['on']("click", "#chat-emoticons .emoticon", function() {
          var window = jQuery(this)["attr"]("alt"),
            ogario = jQuery("#message"),
            _0x4f9a79 = ogario.val();
          _0x4f9a79.length + window.length <= 0x50 && ogario.val(_0x4f9a79 + window), ogario.focus();
        }), this.statsHUD = document.getElementById("stats-hud"), this.activeParties = document.getElementById("active-parties"), this.top5pos = document.getElementById("top5-pos"), this.top5totalMass = document.getElementById('top5-total-mass'), this.top5totalPlayers = document.getElementById("top5-total-players"), this.leaderboardPositionsHUD = document.getElementById("leaderboard-positions"), this.timeHUD = document.getElementById("time-hud"), this.questHUD = document.getElementById("quest-hud"), jQuery("#canvas")["bind"]("contextmenu", function() {
          return !0x1;
        }), jQuery(document)['on']('mouseup', ".btn", function() {
          $(this)['blur']();
        }), jQuery("[data-toggle='tab-tooltip']")["tooltip"]({
          'trigger': "hover"
        }), jQuery(".submenu-panel, #chat-box, #exp-imp-settings, #export-settings, #import-settings")['perfectScrollbar']({
          'suppressScrollX': !0x0
        }), Array.prototype.slice.call(document.querySelectorAll('.js-switch'))["forEach"](function(_0x3b2d1e) {
          new Switchery(_0x3b2d1e, {
            'color': _0x39e92b.menuMainColor,
            'size': "small"
          });
        }), jQuery("input[type='range']")["rangeslider"]({
          'polyfill': !0x1
        }), toastr.options = {
          'newestOnTop': !0x1,
          'positionClass': "toast-bottom-left",
          'timeOut': 0x3a98
        };
      },
      'switchMenuTabs': function(_0x1a6f4e, _0x17968f) {
        var _0xf2101f = _0x1a6f4e.parent();
        if ("menu-panel" === _0x17968f) {
          if (_0x1a6f4e.hasClass("hotkeys-link")) return;
          this.setBlockPopups();
        }
        _0x1a6f4e.addClass("active"), _0xf2101f.addClass("active"), _0xf2101f.siblings()['removeClass']("active"), _0xf2101f.siblings()['find']('a')["removeClass"]("active");
        var _0x543d14 = _0x1a6f4e.attr("href");
        if ('submenu-panel' === _0x17968f) {
          var _0x3c6d18 = jQuery(_0x543d14)["parent"]()["attr"]('id');
          jQuery('#' + _0x3c6d18 + " .submenu-panel")["not"](_0x543d14)["css"]("display", "none");
        } else jQuery('.menu-panel')["not"](_0x543d14)['css']("display", "none");
        jQuery(_0x543d14)["fadeIn"](0x3e8), _0x58f8a8(), jQuery(".submenu-panel")["perfectScrollbar"]('update');
      },
      'getDefaultSettings': function() {
        if (this.noSkins = jQuery("#noSkins")["prop"]("checked"), this.noColors = jQuery("#noColors")['prop']("checked"), this.skipStats = jQuery('#skipStats')["prop"]("checked"), this.showQuest = jQuery("#showQuest")["prop"]("checked"), this.playArenaSounds = jQuery("#playArenaSounds")['prop']('checked'), this.playMenuSounds = jQuery("#playMenuSounds")["prop"]("checked"), ogario.showCustomSkins = !this.noSkins, null !== window.localStorage.getItem('scale_setting')) {
          var _0x2f22b7 = JSON.parse(window.localStorage.getItem("scale_setting"));
          this.setCanvasScale(_0x2f22b7);
        } else {
          var _0x1736d2 = jQuery("#quality")['val']();
          this.getQuality(_0x1736d2);
        }
        null !== window.localStorage.getItem("location") ? (this.region = window.localStorage.getItem('location'), jQuery("#region")["val"](this.region), window.MC && window.MC.setRegion && window.MC.setRegion(this.region)) : this.region = jQuery("#region")['val'](), this.setParty(), Array.prototype.slice.call(document.querySelectorAll(".js-switch-vanilla"))['forEach'](function(_0x26abee) {
          new Switchery(_0x26abee, {
            'color': _0x39e92b.menuMainColor,
            'size': "small"
          });
        }), jQuery('#nick')["val"](_0x234c62.nick)["blur"](), jQuery('#noNames')["prop"]("checked", !_0x2127b2.noNames), jQuery("#showMass")["prop"]("checked", _0x2127b2.showMass), this.unlockButtons(), this.setAutoResp(), this.setQuest();
      },
      'getQuality': function(_0x3ddcfe) {
        var jQuery = 0x1;
        switch ('devicePixelRatio' in window && (jQuery = window.devicePixelRatio), _0x3ddcfe) {
          case 'High':
            this.setCanvasScale(0x1);
            break;
          case "Medium":
            this.setCanvasScale(0.9);
            break;
          case "Low":
            this.setCanvasScale(0.75);
            break;
          case "VeryLow":
            this.setCanvasScale(0.5);
            break;
          default:
            this.setCanvasScale(jQuery);
        }
      },
      'setCanvasScale': function(_0xa7cd62) {
        this.canvasScale = _0xa7cd62, ogario.canvasScale = _0xa7cd62;
      },
      'setStreamMode': function() {
        _0x2127b2.streamMode ? (jQuery("#stream-mode")["addClass"]('ogicon-eye-blocked'), jQuery("#clantag, #nick, #party-token")["addClass"]("stream-mode")) : (jQuery("#stream-mode")["removeClass"]('ogicon-eye-blocked'), jQuery("#clantag, #nick, #party-token")['removeClass']("stream-mode"));
      },
      'setHideSkinUrl': function() {
        _0x2127b2.hideSkinUrl ? (jQuery("#hide-url")["addClass"]('ogicon-eye-blocked'), jQuery('#skin')['addClass']("hide-url")) : (jQuery('#hide-url')["removeClass"]('ogicon-eye-blocked'), jQuery('#skin')["removeClass"]('hide-url'));
      },
      'setShowQuickMenu': function() {
        _0x2127b2.showQuickMenu ? jQuery("#quick-menu")["fadeIn"](0x1f4) : jQuery("#quick-menu")["fadeOut"](0x1f4);
      },
      'setShowSkinsPanel': function() {
        _0x2127b2.showSkinsPanel ? jQuery("#skins-panel")["fadeIn"](0x1f4) : jQuery("#skins-panel")["fadeOut"](0x1f4);
      },
      'unlockButtons': function() {
        jQuery('.btn-play, .btn-play-guest, .btn-login-play, .btn-spectate')["prop"]("disabled", !0x1);
      },
      'setMainButtons': function() {
        var window = this;
        jQuery(document)['on']("click", ".btn-play, .btn-play-guest", function() {
          window.onPlay();
        }), jQuery(document)['on']("click", ".btn-spectate", function() {
          window.onSpectate();
        }), jQuery(document)['on']('click', "#create-party-btn-2", function() {
          window.onCreate();
        }), jQuery(document)['on']("click", "#join-party-btn-2", function() {
          window.skipServerData = !0x0, window.joinParty(), window.onJoin();
        }), jQuery(document)['on']("click", "#statsContinue2", function() {
          jQuery("#stats, #main-panel")["toggle"]();
        });
      },
      'play': function() {
        if (this.setPlayerSettings(), this.setParty(), this.isSocketOpen()) this.sendPartyData();
        else {
          this.connect();
          var window = this;
          setTimeout(function() {
            window.sendPartyData();
          }, 0x3e8);
        }
      },
      'onPlay': function() {
        this.play(), jQuery(".ogario-menu")["hide"](), window.addKeyListeners(), ogario.spectate = !0x1, ogario.playerBestMass = 0x0, _0x2127b2.autoHideFood && (ogario.showFood = !0x0), window.ga && window.ga("create", "UA-67142685-2", "auto", 'ogarioTracker'), window.ga && window.ga("ogarioTracker.send", "pageview");
      },
      'onSpectate': function() {
        this.onJoin(), this.sendPlayerJoin(), jQuery(".ogario-menu")["hide"](), window.addKeyListeners(), ogario.play = !0x1, ogario.spectate = !0x0, _0x2127b2.autoHideFood && (ogario.showFood = !0x1);
      },
      'join': function() {
        this.setParty(), this.setPlayerSettings(), this.sendPartyData(), this.sendPlayerDeath();
      },
      'onJoin': function() {
        if (this.setParty(), this.isSocketOpen()) this.join();
        else {
          this.connect();
          var window = this;
          setTimeout(function() {
            window.join(), window.sendPlayerJoin();
          }, 0x3e8);
        }
      },
      'create': function() {
        if (this.setParty(), this.partyToken) this.onJoin();
        else {
          var window = this;
          setTimeout(function() {
            window.create();
          }, 0x64);
        }
      },
      'onCreate': function() {
        this.setParty(), ":party" === this.gameMode && this.partyToken ? this.gameServerReconnect() : this.createParty(), this.create();
      },
      'onPlayerSpawn': function() {
        if (ogario.play = !0x0, ogario.playerColor) return this.sendPlayerSpawn(), void this.cacheCustomSkin(_0x234c62.nick, ogario.playerColor, _0x234c62.skinURL);
        var window = this;
        setTimeout(function() {
          window.onPlayerSpawn();
        }, 0x64);
      },
      'onPlayerDeath': function() {
        jQuery(".ogario-menu")["show"](), jQuery(".menu-panel")["hide"](), this.skipStats ? jQuery("#main-panel")['show']() : jQuery("#stats")['show'](), ogario.play = !0x1, ogario.playerColor = null, ogario.foodIsHidden = !0x1, ogario.playerMass = 0x0, this.sendPlayerDeath(), this.updateDeathLocations(ogario.playerX, ogario.playerY), this.unlockButtons(), _0x29d6f5(), this.autoResp();
      },
      'setPlayerSettings': function() {
        var window = jQuery('#nick')["val"](),
          _0x336b6d = jQuery("#clantag")["val"](),
          _0xf302b = jQuery("#skin")["val"](),
          _0x167827 = jQuery('#color')["val"]();
        _0x234c62.nick = window || '', _0x234c62.clanTag = _0x336b6d.trim() || '', _0x234c62.skinURL = _0xf302b.trim() || '', 0x7 == _0x167827.length && (_0x234c62.color = _0x167827), _0x234c62.clanTag.length > 0x0 && (ogario.clanTag = _0x234c62.clanTag), _0x2ace8d[this.selectedProfile]["nick"] = _0x234c62.nick, _0x2ace8d[this.selectedProfile]["clanTag"] = _0x234c62.clanTag, _0x2ace8d[this.selectedProfile]["skinURL"] = _0x234c62.skinURL, _0x2ace8d[this.selectedProfile]["color"] = _0x234c62.color, this.saveSettings(_0x2ace8d, 'ogarioPlayerProfiles');
      },
      'loadSkin': function(_0x5b21c6, _0x30bf31) {
        var jQuery = this;
        _0x5b21c6[_0x30bf31] = new Image(), _0x5b21c6[_0x30bf31]["crossOrigin"] = "Anonymous", _0x5b21c6[_0x30bf31]["onload"] = function() {
          this.complete && this.width && this.height && this.width <= 0x7d0 && this.height <= 0x7d0 && (jQuery.cacheQueue.push(_0x30bf31), 0x1 == jQuery.cacheQueue.length && jQuery.cacheSkin(jQuery.customSkinsCache));
        }, _0x5b21c6[_0x30bf31]["src"] = _0x30bf31;
      },
      'cacheSkin': function(_0x55f30c) {
        if (0x0 != this.cacheQueue.length) {
          var ogario = this.cacheQueue.shift();
          if (ogario) {
            var jQuery = document.createElement("canvas");
            jQuery.width = 0x200, jQuery.height = 0x200;
            var _0x38774f = jQuery.getContext('2d');
            _0x38774f.beginPath(), _0x38774f.arc(0x100, 0x100, 0x100, 0x0, 0x2 * Math.PI, !0x1), _0x38774f.clip(), _0x38774f.drawImage(this.customSkinsCache[ogario], 0x0, 0x0, 0x200, 0x200), this.customSkinsCache[ogario + "_cached"] = new Image(), this.customSkinsCache[ogario + "_cached"]['src'] = jQuery.toDataURL(), jQuery = null, this.cacheSkin(this.customSkinsCache);
          }
        }
      },
      'getCachedSkin': function(_0x5ec474, _0x989acf) {
        return _0x5ec474[_0x989acf + "_cached"] && _0x5ec474[_0x989acf + "_cached"]['complete'] && _0x5ec474[_0x989acf + '_cached']["width"] ? _0x5ec474[_0x989acf + "_cached"] : null;
      },
      'cacheCustomSkin': function(_0x3a07c7, _0x560bd4, _0x2f9ffe) {
        if (_0x2f9ffe) {
          var _0x4dfb76 = ":party" === this.gameMode ? _0x3a07c7 + _0x560bd4 : _0x3a07c7;
          if (_0x4dfb76 && (this.customSkinsMap[_0x4dfb76] = _0x2f9ffe), this.customSkinsCache.hasOwnProperty(_0x2f9ffe)) return;
          this.loadSkin(this.customSkinsCache, _0x2f9ffe);
        }
      },
      'getCustomSkin': function(_0x47958a, _0x172d03) {
        var jQuery = ":party" === this.gameMode ? _0x47958a + _0x172d03 : _0x47958a;
        return this.customSkinsMap.hasOwnProperty(jQuery) ? this.getCachedSkin(this.customSkinsCache, this.customSkinsMap[jQuery]) : null;
      },
      'countFPS': function() {
        if (_0x2127b2.showStatsFPS)
          if (this.fpsLastRequest) {
            var window = Date.now();
            window - this.fpsLastRequest >= 0x3e8 && (this.rFps = this.renderedFrames, this.renderedFrames = 0x0, this.fpsLastRequest = window), this.renderedFrames++;
          } else this.fpsLastRequest = Date.now();
      },
      'calculateCurrentSector': function() {
        if (ogario.mapOffsetFixed) {
          var window = ogario.mapOffsetX + ogario.mapOffset,
            jQuery = ogario.mapOffsetY + ogario.mapOffset,
            _0x2c559a = String.fromCharCode(0x41 + Math.floor((ogario.playerY + jQuery) / (ogario.mapSize / _0x39e92b.sectorsY))),
            _0xb9ee7 = (Math.floor((ogario.playerX + window) / (ogario.mapSize / _0x39e92b.sectorsX)) + 0x1)["toString"]();
          this.currentSector = _0x2c559a + _0xb9ee7;
        } else this.currentSector = '';
      },
      'calculateTargetSector': function(_0x4f362b, _0x565085) {
        return ogario.mapOffsetFixed ? String.fromCharCode(0x41 + Math.floor((_0x565085 + ogario.mapOffset) / (ogario.mapSize / _0x39e92b.sectorsY))) + (Math.floor((_0x4f362b + ogario.mapOffset) / (ogario.mapSize / _0x39e92b.sectorsX)) + 0x1)["toString"]() : '';
      },
      'updateDeathLocations': function(_0xc52a33, _0x2c2a0f) {
        ogario.mapOffsetFixed && (this.deathLocations.push({
          'x': _0xc52a33 + ogario.mapOffsetX,
          'y': _0x2c2a0f + ogario.mapOffsetY
        }), 0x6 == this.deathLocations.length && this.deathLocations.shift(), this.lastDeath = this.deathLocations.length - 0x1);
      },
      'drawMapBorders': function(_0x2a3687, _0x1d92ef, _0x2ddd75, _0x4b762e, _0x2580b5, _0x3701a1, _0x1dab07, _0x374e15) {
        !ogario.mapOffsetFixed || !_0x2127b2.showMapBorders && _0x374e15 || (_0x2a3687.strokeStyle = _0x3701a1, _0x2a3687.lineWidth = _0x1dab07, _0x2a3687.beginPath(), _0x2a3687.moveTo(_0x1d92ef, _0x2ddd75), _0x2a3687.lineTo(_0x4b762e, _0x2ddd75), _0x2a3687.lineTo(_0x4b762e, _0x2580b5), _0x2a3687.lineTo(_0x1d92ef, _0x2580b5), _0x2a3687.closePath(), _0x2a3687.stroke());
      },
      'drawMiniMap': function() {
        if (ogario.mapOffsetFixed) {
          var window = _0x39e92b.miniMapWidth,
            jQuery = _0x39e92b.miniMapTop,
            _0xb51e4a = window + jQuery,
            _0x2921f9 = window - 0x12,
            _0x1a8896 = jQuery + 9.5;
          this.miniMap ? this.miniMapCtx.clearRect(0x0, 0x0, window, _0xb51e4a) : (this.miniMap = document.getElementById("minimap"), this.miniMapCtx = this.miniMap.getContext('2d'), this.miniMapCtx.ogarioCtx = !0x0, this.miniMap.width = window, this.miniMap.height = _0xb51e4a), this.miniMap.width != window && (this.miniMap.width = window, this.miniMap.height = _0xb51e4a);
          var _0x3ea9f6 = _0x2921f9 / ogario.mapSize,
            _0x3cba02 = ogario.mapOffsetX + ogario.mapOffset,
            _0x1de5d0 = ogario.mapOffsetY + ogario.mapOffset;
          if (this.drawSelectedCell(this.miniMapCtx), this.calculateCurrentSector(), this.miniMapCtx.globalAlpha = 0x1, this.miniMapCtx.font = _0x39e92b.miniMapFontWeight + ' ' + (jQuery - 0x4) + "px " + _0x39e92b.miniMapFontFamily, this.miniMapCtx.fillStyle = _0x39e92b.miniMapSectorColor, this.miniMapCtx.fillText(this.currentSector, 0xa, jQuery), this.miniMapSectors || this.drawMiniMapSectors(_0x39e92b.sectorsX, _0x39e92b.sectorsY, _0x2921f9, _0xb51e4a, _0x1a8896), this.miniMapCtx.save(), this.miniMapCtx.translate(9.5, _0x1a8896), _0x2127b2.showMiniMapGuides) {
            var _0x49f5c6 = Math.round((ogario.playerX + _0x3cba02) * _0x3ea9f6),
              _0x3bfadc = Math.round((ogario.playerY + _0x1de5d0) * _0x3ea9f6);
            this.miniMapCtx.lineWidth = 0x1, this.miniMapCtx.strokeStyle = _0x39e92b.miniMapGuidesColor, this.miniMapCtx.beginPath(), this.miniMapCtx.moveTo(_0x49f5c6, 0x0), this.miniMapCtx.lineTo(_0x49f5c6, _0x2921f9 - 0x1), this.miniMapCtx.moveTo(0x0, _0x3bfadc), this.miniMapCtx.lineTo(_0x2921f9 - 0x1, _0x3bfadc), this.miniMapCtx.stroke();
          }
          if (this.miniMapCtx.beginPath(), this.miniMapCtx.arc((ogario.playerX + _0x3cba02) * _0x3ea9f6, (ogario.playerY + _0x1de5d0) * _0x3ea9f6, _0x39e92b.miniMapMyCellSize, 0x0, this.pi2, !0x1), this.miniMapCtx.closePath(), _0x39e92b.miniMapMyCellStrokeSize > 0x0 && (this.miniMapCtx.lineWidth = _0x39e92b.miniMapMyCellStrokeSize, this.miniMapCtx.strokeStyle = _0x39e92b.miniMapMyCellStrokeColor, this.miniMapCtx.stroke()), this.miniMapCtx.fillStyle = _0x39e92b.miniMapMyCellColor, this.miniMapCtx.fill(), this.teamPlayers.length)
            for (var _0x3c8cbe = 0x0; _0x3c8cbe < this.teamPlayers.length; _0x3c8cbe++) this.teamPlayers[_0x3c8cbe]["drawPosition"](this.miniMapCtx, ogario.mapOffset, _0x3ea9f6, this.privateMiniMap, this.targetID);
          if (this.deathLocations.length > 0x0) {
            _0x49f5c6 = Math.round((this.deathLocations[this.lastDeath]['x'] + ogario.mapOffset) * _0x3ea9f6), _0x3bfadc = Math.round((this.deathLocations[this.lastDeath]['y'] + ogario.mapOffset) * _0x3ea9f6);
            var _0x3796a1 = Math.max(_0x39e92b.miniMapMyCellSize - 0x2, 0x4);
            this.miniMapCtx.lineWidth = 0x1, this.miniMapCtx.strokeStyle = this.deathLocations.length - 0x1 == this.lastDeath ? _0x39e92b.miniMapDeathLocationColor : "#FFFFFF", this.miniMapCtx.beginPath(), this.miniMapCtx.moveTo(_0x49f5c6 - _0x3796a1, _0x3bfadc), this.miniMapCtx.lineTo(_0x49f5c6 + _0x3796a1, _0x3bfadc), this.miniMapCtx.moveTo(_0x49f5c6, _0x3bfadc - _0x3796a1), this.miniMapCtx.lineTo(_0x49f5c6, _0x3bfadc + _0x3796a1), this.miniMapCtx.stroke();
          }
          this.miniMapCtx.restore();
        }
      },
      'drawMiniMapSectors': function(_0xd021b5, _0x105c3a, _0x2783e3, _0x272194, _0x2c1333) {
        this.miniMapSectors = document.getElementById('minimap-sectors');
        var _0x3178cd = this.miniMapSectors.getContext('2d');
        _0x3178cd.ogarioCtx = !0x0, this.miniMapSectors.width = _0x2783e3, this.miniMapSectors.height = _0x272194, _0x3178cd.fillStyle = '#FFFFFF', this.dTok(_0x3178cd, _0x2783e3 - 0x1), this.drawSectors(_0x3178cd, _0xd021b5, _0x105c3a, 0.5, _0x2c1333, _0x2783e3 - 0.5, _0x272194 - 9.5, _0x39e92b.miniMapSectorsColor, _0x39e92b.miniMapSectorsColor, 0x1, !0x1);
      },
      'resetMiniMapSectors': function() {
        this.miniMapSectors = null;
      },
      'drawSectors': function(_0x25f4bb, _0x450eaf, _0xb7c8fe, _0x23b23d, _0x209b4a, _0x43a7fd, _0x30018e, _0x4921fe, _0x37a35c, _0x393ded, _0x203b24) {
        if (!_0x203b24 || ogario.mapOffsetFixed && _0x2127b2.showBgSectors) {
          var _0x43d237 = Math.floor((_0x43a7fd - _0x23b23d) / _0x450eaf),
            _0x3e83c6 = Math.floor((_0x30018e - _0x209b4a) / _0xb7c8fe),
            _0x3e78e8 = 0x0,
            _0x5b031c = 0x0;
          if (_0x25f4bb.strokeStyle = _0x4921fe, _0x25f4bb.fillStyle = _0x37a35c, _0x25f4bb.lineWidth = _0x393ded, _0x203b24 || !_0x203b24 && _0x2127b2.showMiniMapGrid) {
            _0x25f4bb.beginPath();
            for (var _0x20bfb0 = 0x0; _0x20bfb0 < _0x450eaf + 0x1; _0x20bfb0++) _0x3e78e8 = _0x23b23d + _0x43d237 * _0x20bfb0, _0x25f4bb.moveTo(_0x20bfb0 == _0x450eaf ? _0x43a7fd : _0x3e78e8, _0x209b4a), _0x25f4bb.lineTo(_0x20bfb0 == _0x450eaf ? _0x43a7fd : _0x3e78e8, _0x30018e);
            for (_0x20bfb0 = 0x0; _0x20bfb0 < _0xb7c8fe + 0x1; _0x20bfb0++) _0x5b031c = _0x209b4a + _0x3e83c6 * _0x20bfb0, _0x25f4bb.moveTo(_0x23b23d - _0x393ded / 0x2, _0x20bfb0 == _0xb7c8fe ? _0x30018e : _0x5b031c), _0x25f4bb.lineTo(_0x43a7fd + _0x393ded / 0x2, _0x20bfb0 == _0xb7c8fe ? _0x30018e : _0x5b031c);
            _0x25f4bb.stroke();
          } else this.drawMapBorders(_0x25f4bb, _0x23b23d, _0x209b4a, _0x43a7fd, _0x30018e, _0x4921fe, _0x393ded, !0x1);
          if (_0x203b24) var _0x4ae0aa = _0x39e92b.sectorsFontWeight + ' ' + _0x39e92b.sectorsFontSize + "px " + _0x39e92b.sectorsFontFamily;
          else _0x4ae0aa = _0x39e92b.miniMapFontWeight + ' ' + Math.floor(0.4 * _0x3e83c6) + "px " + _0x39e92b.miniMapFontFamily;
          _0x25f4bb.font = _0x4ae0aa, _0x25f4bb.textAlign = "center", _0x25f4bb.textBaseline = "middle";
          for (_0x20bfb0 = 0x0; _0x20bfb0 < _0xb7c8fe; _0x20bfb0++)
            for (var _0x212dfe = 0x0; _0x212dfe < _0x450eaf; _0x212dfe++) {
              var _0x3d41b6 = String.fromCharCode(0x41 + _0x20bfb0) + (_0x212dfe + 0x1);
              _0x3e78e8 = Math.floor(_0x23b23d + _0x43d237 / 0x2 + _0x212dfe * _0x43d237), _0x5b031c = Math.floor(_0x209b4a + _0x3e83c6 / 0x2 + _0x20bfb0 * _0x3e83c6), _0x25f4bb.fillText(_0x3d41b6, _0x3e78e8, _0x5b031c);
            }
        }
      },
      'drawGrid': function(_0x5917df) {
        if (_0x2127b2.showGrid) {
          var jQuery = ogario.innerW / ogario.viewScale,
            _0x1cdbc0 = ogario.innerH / ogario.viewScale,
            _0x2fd876 = (-ogario.playerX + jQuery / 0x2) % 0x32,
            _0xfe9cb7 = (-ogario.playerY + _0x1cdbc0 / 0x2) % 0x32;
          for (_0x5917df.strokeStyle = _0x39e92b.gridColor, _0x5917df.globalAlpha = 0x1 * ogario.viewScale, _0x5917df.beginPath(); _0x2fd876 < jQuery; _0x2fd876 += 0x32) _0x5917df.moveTo(_0x2fd876 * ogario.viewScale - 0.5, 0x0), _0x5917df.lineTo(_0x2fd876 * ogario.viewScale - 0.5, _0x1cdbc0 * ogario.viewScale);
          for (; _0xfe9cb7 < _0x1cdbc0; _0xfe9cb7 += 0x32) _0x5917df.moveTo(0x0, _0xfe9cb7 * ogario.viewScale - 0.5), _0x5917df.lineTo(jQuery * ogario.viewScale, _0xfe9cb7 * ogario.viewScale - 0.5);
          _0x5917df.stroke(), _0x5917df.globalAlpha = 0x1;
        }
      },
      'drawSelectedCell': function(_0x1ddc3c) {
        ogario.play && ogario.playerCellsMass && ogario.playerCellsMass.length > 0x1 && (_0x2127b2.splitRange || _0x2127b2.oppColors || _0x2127b2.oppRings || _0x2127b2.showStatsSTE) && (_0x1ddc3c.fillStyle = "#FFFFFF", _0x1ddc3c.globalAlpha = this.selectBiggestCell ? 0.6 : 0.3, _0x1ddc3c.beginPath(), _0x1ddc3c.arc(0x30, 0xf, 0x6, 0x0, this.pi2, !0x1), _0x1ddc3c.closePath(), _0x1ddc3c.fill(), _0x1ddc3c.globalAlpha = this.selectBiggestCell ? 0.3 : 0.6, _0x1ddc3c.beginPath(), _0x1ddc3c.arc(0x3c, 0xf, 0x4, 0x0, this.pi2, !0x1), _0x1ddc3c.closePath(), _0x1ddc3c.fill());
      },
      'dTok': function(_0x3ce377, _0x5b9e09) {
        _0x3ce377.font = _0x39e92b.miniMapFontWeight + ' ' + (_0x39e92b.miniMapTop - 0x6) + "px " + _0x39e92b.miniMapFontFamily, _0x3ce377.textAlign = "right", _0x3ce377.textBaseline = "top", _0x3ce377.fillText(atob(this.token), _0x5b9e09, 0x7);
      },
      'drawCircle': function(_0x4b61c5, _0x84551, _0x24be10, _0x4e5f3d, _0x4f83db, _0x1628dd) {
        _0x4b61c5.lineWidth = _0x4e5f3d, _0x4b61c5.globalAlpha = _0x4f83db, _0x4b61c5.strokeStyle = _0x1628dd;
        for (var _0x1e13ac = 0x0; _0x1e13ac < _0x84551.length; _0x1e13ac++) _0x4b61c5.beginPath(), _0x4b61c5.arc(_0x84551[_0x1e13ac]['x'], _0x84551[_0x1e13ac]['y'], _0x84551[_0x1e13ac]["size"] + _0x24be10, 0x0, this.pi2, !0x1), _0x4b61c5.closePath(), _0x4b61c5.stroke();
        _0x4b61c5.globalAlpha = 0x1;
      },
      'drawTeammatesInd': function(_0x433f90, _0x211ce4, _0x6e7a1, _0x1d8465) {
        this.indicator && _0x433f90.drawImage(this.indicator, _0x211ce4 - 0x2d, _0x6e7a1 - _0x1d8465 - 0x5a);
      },
      'drawCellInfo': function(_0x2df86d, _0x280586, _0x2b7046, _0x247301, _0x4f75ee, _0x47d4c1, _0x2c1757, _0x4a77e9, _0x1a6953, _0x2c0a5f, _0x1a13ec, _0x2a3efb) {
        if (!_0x47d4c1 && !_0x1a6953 && (_0x2df86d.globalAlpha = ogario.globalAlpha, _0x2127b2.teammatesInd && _0x2a3efb && !_0x4a77e9 && _0x4f75ee <= 0xc8 && this.drawTeammatesInd(_0x2df86d, _0x2b7046, _0x247301, _0x4f75ee), !_0x2127b2.noNames || _0x2127b2.showMass)) {
          var _0x132e03 = !0x1;
          if (_0x4a77e9 || _0x2c1757 || !(_0x132e03 = this.setAutoHideCellInfo(_0x4f75ee)) || !_0x2127b2.autoHideNames || !_0x2127b2.autoHideMass) {
            var _0x48432b = null;
            if (!this.cells.hasOwnProperty(_0x280586)) return (_0x48432b = new function(_0x29b39c, _0x57e068, _0x37ea8a, _0x38b296, _0x5e70d7, _0x145dee) {
              this.x = _0x29b39c, this.y = _0x57e068, this.isVirus = _0x37ea8a, this.isPlayerCell = _0x38b296, this.shortMass = _0x5e70d7, this.virMassShots = _0x145dee, this.size = 0x0, this.nick = '', this.nickCanvas = null, this.mass = 0x0, this.lastMass = 0x0, this.kMass = 0x0, this.massCanvas = null, this.massTxt = '', this.margin = 0x0, this.scale = 0x1, this.nickScale = 0x1, this.massScale = 0x1, this.virMassScale = 0x3, this.strokeScale = 0x1, this.fontSize = 0x1a, this.nickSize = 0x1a, this.lastNickSize = 0x0, this.massSize = 0x1a, this.virMassSize = 0x1a, this.nickStrokeSize = 0x3, this.massStrokeSize = 0x3, this.rescale = !0x1, this.redrawNick = !0x0, this.redrawMass = !0x0, this.optimizedNames = !0x1, this.optimizedMass = !0x1, this.strokeNick = !0x1, this.strokeMass = !0x1, this.update = function(_0x5f327a, _0x413da0, _0x5101dc, _0x42d62e, _0x2d3eb6, _0x20d6b6) {
                this.x = _0x5f327a, this.y = _0x413da0, this.isVirus = _0x42d62e, this.isPlayerCell = _0x2d3eb6, this.setMass(_0x5101dc), this.setNick(_0x20d6b6);
              }, this.setMass = function(_0x229ec7) {
                if (this.size != _0x229ec7 && (this.size = _0x229ec7, !(_0x229ec7 <= 0x28))) {
                  if (this.massCanvas || (this.massCanvas = new _0x13b585()), this.mass = ~~(_0x229ec7 * _0x229ec7 / 0x64), this.redrawMass = !0x0, this.isVirus) return this.virMassShots && this.mass < 0xc8 && (this.mass = ~~((0xc8 - this.mass) / 0xe)), void(this.massTxt = this.mass.toString());
                  if (this.massTxt = this.mass.toString(), !(this.mass <= 0xc8)) return this.shortMass && this.mass >= 0x3e8 ? (this.kMass = Math.round(this.mass / 0x64) / 0xa, void(this.massTxt = this.kMass + 'k')) : void(this.optimizedMass && (this.redrawMass = Math.abs((this.mass - this.lastMass) / this.mass) >= 0.02 || this.rescale));
                }
              }, this.setNick = function(_0x40661c) {
                this.nick = _0x40661c, _0x40661c && !this.isVirus && (this.nickCanvas || (this.nickCanvas = new _0x13b585()));
              }, this.setScale = function(_0x585427, _0x116945, _0x3926e4, _0x1ff188, _0xd024c5) {
                var _0x145dee = Math.ceil(0xa * _0x585427) / 0xa;
                this.rescale = !0x1, this.scale != _0x145dee && (this.scale = _0x145dee, this.rescale = !0x0), this.nickScale = _0x116945, this.massScale = _0x3926e4, this.virMassScale = _0x1ff188, this.strokeScale = _0xd024c5;
              }, this.setFontSize = function() {
                this.isVirus ? this.massSize = Math.ceil(this.virMassSize * this.scale * this.virMassScale) : (this.fontSize = Math.max(0.3 * this.size, 0x1a) * this.scale, this.nickSize = ~~(this.fontSize * this.nickScale), this.massSize = ~~(0.5 * this.fontSize * this.massScale), this.optimizedNames ? this.redrawNick = Math.abs((this.nickSize - this.lastNickSize) / this.nickSize) >= 0.3 || this.rescale : this.redrawNick = !0x0);
              }, this.setStrokeSize = function() {
                this.strokeNick && !this.isVirus && (this.nickStrokeSize = ~~(0.1 * this.nickSize * this.strokeScale)), this.strokeMass && (this.massStrokeSize = ~~(0.1 * this.massSize * this.strokeScale));
              }, this.setDrawing = function(_0x25d56c, _0x380390, _0x45f6f1, _0x419bb2, _0xd40c8f, _0x574d00) {
                this.optimizedNames = _0x25d56c, this.optimizedMass = _0x380390, this.shortMass = _0x45f6f1, this.virMassShots = _0x419bb2, this.strokeNick = _0xd40c8f, this.strokeMass = _0x574d00;
              }, this.setDrawingScale = function(_0x10981f, _0x2960b5, _0x5e4c50, _0x9fe085, _0x3a1beb) {
                this.setScale(_0x10981f, _0x2960b5, _0x5e4c50, _0x9fe085, _0x3a1beb), this.setFontSize(), this.setStrokeSize(), this.margin = 0x0;
              }, this.drawNick = function(_0x3fdd99, _0x477da2, _0x272ed2, _0x42b028, _0x4f9dca) {
                if (this.nick && this.nickCanvas && !this.isVirus) {
                  var _0x145dee = this.nickCanvas;
                  _0x145dee.setDrawing(_0x477da2, _0x272ed2, _0x42b028, this.strokeNick, this.nickStrokeSize, _0x4f9dca), _0x145dee.setTxt(this.nick), this.redrawNick && (_0x145dee.setFontSize(this.nickSize), this.lastNickSize = this.nickSize), _0x145dee.setScale(this.scale);
                  var _0x47d4c1 = _0x145dee.drawTxt(),
                    _0x2c1757 = ~~(_0x47d4c1.width / this.scale),
                    _0x4a77e9 = ~~(_0x47d4c1.height / this.scale);
                  this.margin = ~~(_0x4a77e9 / 0x2), _0x3fdd99.drawImage(_0x47d4c1, ~~this.x - ~~(_0x2c1757 / 0x2), ~~this.y - this.margin, _0x2c1757, _0x4a77e9);
                }
              }, this.drawMass = function(_0x4a8980, _0x3a57da, _0x2f3943, _0x1e8a49, _0x373c54) {
                if (this.massCanvas && !(this.size <= 0x28)) {
                  var _0x145dee = this.massCanvas;
                  _0x145dee.setDrawing(_0x3a57da, _0x2f3943, _0x1e8a49, this.strokeMass, this.massStrokeSize, _0x373c54), this.redrawMass && (_0x145dee.setTxt(this.massTxt), this.lastMass = this.mass), _0x145dee.setFontSize(this.massSize), _0x145dee.setScale(this.scale);
                  var _0x47d4c1 = _0x145dee.drawTxt(),
                    _0x2c1757 = ~~(_0x47d4c1.width / this.scale),
                    _0x4a77e9 = ~~(_0x47d4c1.height / this.scale),
                    _0x1a6953 = 0x0 == this.margin ? ~~this.y - ~~(_0x4a77e9 / 0x2) : ~~this.y + this.margin;
                  _0x4a8980.drawImage(_0x47d4c1, ~~this.x - ~~(_0x2c1757 / 0x2), _0x1a6953, _0x2c1757, _0x4a77e9);
                }
              };
            }(_0x2b7046, _0x247301, _0x2c1757, _0x4a77e9, _0x2127b2.shortMass, _0x2127b2.virMassShots))["setMass"](_0x4f75ee), _0x48432b.setNick(_0x2c0a5f), void(this.cells[_0x280586] = _0x48432b);
            (_0x48432b = this.cells[_0x280586])["update"](_0x2b7046, _0x247301, _0x4f75ee, _0x2c1757, _0x4a77e9, _0x2c0a5f), _0x48432b.setDrawing(_0x2127b2.optimizedNames, _0x2127b2.optimizedMass, _0x2127b2.shortMass, _0x2127b2.virMassShots, _0x2127b2.namesStroke, _0x2127b2.massStroke), _0x48432b.setDrawingScale(ogario.viewScale, _0x39e92b.namesScale, _0x39e92b.massScale, _0x39e92b.virMassScale, _0x39e92b.strokeScale), _0x2df86d.globalAlpha = _0x39e92b.textAlpha, _0x2127b2.noNames || _0x132e03 && _0x2127b2.autoHideNames || _0x4a77e9 && _0x2127b2.hideMyName || _0x2a3efb && _0x2127b2.hideTeammatesNames || _0x48432b.drawNick(_0x2df86d, _0x39e92b.namesColor, _0x39e92b.namesFontFamily, _0x39e92b.namesFontWeight, _0x39e92b.namesStrokeColor), !_0x2127b2.showMass || _0x132e03 && _0x2127b2.autoHideMass || _0x4a77e9 && _0x2127b2.hideMyMass || _0x2127b2.hideEnemiesMass && !_0x4a77e9 && !_0x2c1757 || _0x48432b.drawMass(_0x2df86d, _0x39e92b.massColor, _0x39e92b.massFontFamily, _0x39e92b.massFontWeight, _0x39e92b.massStrokeColor);
          }
        }
      },
      'preDrawIndicator': function() {
        this.indicator = null;
        var window = document.createElement("canvas");
        window.width = 0x5a, window.height = 0x32;
        var ogario = window.getContext('2d');
        ogario.lineWidth = 0x2, ogario.fillStyle = _0x39e92b.teammatesIndColor, ogario.strokeStyle = '#000000', ogario.beginPath(), ogario.moveTo(0x0, 0x0), ogario.lineTo(0x5a, 0x0), ogario.lineTo(0x2d, 0x32), ogario.closePath(), ogario.fill(), ogario.stroke(), this.indicator = new Image(), this.indicator.src = window.toDataURL(), window = null;
      },
      'preDrawPellet': function() {
        this.pellet = null;
        var window = 0xa + _0x39e92b.foodSize,
          ogario = document.createElement("canvas");
        ogario.width = 0x2 * window, ogario.height = 0x2 * window;
        var jQuery = ogario.getContext('2d');
        jQuery.arc(window, window, window, 0x0, this.pi2, !0x1), jQuery.fillStyle = _0x39e92b.foodColor, jQuery.fill(), this.pellet = new Image(), this.pellet.src = ogario.toDataURL(), ogario = null;
      },
      'customDraw': function(_0x4faef1) {
        this.countFPS();
        var jQuery = Math.floor(ogario.mapMinX - ogario.mapOffsetX),
          _0xe42be0 = Math.floor(ogario.mapMinY - ogario.mapOffsetY),
          _0x2504ef = Math.floor(ogario.mapMaxX - ogario.mapOffsetX),
          _0x2cd4f9 = Math.floor(ogario.mapMaxY - ogario.mapOffsetY),
          _0x27258f = _0x39e92b.bordersWidth / 0x2;
        if (this.drawSectors(_0x4faef1, _0x39e92b.sectorsX, _0x39e92b.sectorsY, jQuery, _0xe42be0, _0x2504ef, _0x2cd4f9, _0x39e92b.gridColor, _0x39e92b.sectorsColor, _0x39e92b.sectorsWidth, !0x0), this.drawMapBorders(_0x4faef1, jQuery - _0x27258f, _0xe42be0 - _0x27258f, _0x2504ef + _0x27258f, _0x2cd4f9 + _0x27258f, _0x39e92b.bordersColor, _0x39e92b.bordersWidth, !0x0), ogario.virusesCache && ogario.virusesCache.length > 0x0) {
          _0x4faef1.beginPath();
          for (var _0x33bdc3 = 0x0; _0x33bdc3 < ogario.virusesCache.length; _0x33bdc3++) {
            var _0x521d90 = ogario.virusesCache[_0x33bdc3]['x'],
              _0x572788 = ogario.virusesCache[_0x33bdc3]['y'];
            _0x4faef1.moveTo(_0x521d90, _0x572788), _0x4faef1.arc(_0x521d90, _0x572788, ogario.virusesCache[_0x33bdc3]['size'] + 0x334, 0x0, this.pi2, !0x1);
          }
          _0x4faef1.fillStyle = _0x39e92b.virusColor, _0x4faef1.globalAlpha = 0.1, _0x4faef1.fill(), _0x4faef1.globalAlpha = 0x1, ogario.virusesCache = [];
        }
        if (ogario.foodCache && ogario.foodCache.length > 0x0) {
          if (_0x2127b2.optimizedFood && this.pellet)
            for (_0x33bdc3 = 0x0; _0x33bdc3 < ogario.foodCache.length; _0x33bdc3++) {
              _0x521d90 = ogario.foodCache[_0x33bdc3]['x'] - 0xa - _0x39e92b.foodSize, _0x572788 = ogario.foodCache[_0x33bdc3]['y'] - 0xa - _0x39e92b.foodSize;
              _0x4faef1.drawImage(this.pellet, _0x521d90, _0x572788);
            } else {
              _0x4faef1.beginPath();
              for (_0x33bdc3 = 0x0; _0x33bdc3 < ogario.foodCache.length; _0x33bdc3++) {
                _0x521d90 = ogario.foodCache[_0x33bdc3]['x'], _0x572788 = ogario.foodCache[_0x33bdc3]['y'];
                if (_0x4faef1.moveTo(_0x521d90, _0x572788), ogario.viewScale < 0.16) {
                  var _0x5be85b = ogario.foodCache[_0x33bdc3]["size"] + _0x39e92b.foodSize;
                  _0x4faef1.rect(_0x521d90 - _0x5be85b, _0x572788 - _0x5be85b, 0x2 * _0x5be85b, 0x2 * _0x5be85b);
                } else _0x4faef1.arc(_0x521d90, _0x572788, ogario.foodCache[_0x33bdc3]["size"] + _0x39e92b.foodSize, 0x0, this.pi2, !0x1);
              }
              _0x4faef1.fillStyle = _0x39e92b.foodColor, _0x4faef1.globalAlpha = 0x1, _0x4faef1.fill();
            }
          ogario.foodCache = [];
        }
        if (ogario.play) {
          if (_0x2127b2.splitRange) {
            if (ogario.playerCells && ogario.playerCells.length > 0x0) {
              ogario.playerCells.sort(function(_0x185d9c, _0x13d8e3) {
                return _0x13d8e3.size - _0x185d9c.size;
              });
              var _0xee6084 = this.selectBiggestCell ? 0x0 : ogario.playerCells.length - 0x1;
              _0x4faef1.lineWidth = 0x6, _0x4faef1.globalAlpha = _0x39e92b.darkTheme ? 0.7 : 0.35, _0x4faef1.strokeStyle = _0x39e92b.splitRangeColor, _0x4faef1.beginPath(), _0x4faef1.arc(ogario.playerCells[_0xee6084]['x'], ogario.playerCells[_0xee6084]['y'], ogario.playerCells[_0xee6084]["size"] + 0x2f8, 0x0, this.pi2, !0x1), _0x4faef1.closePath(), _0x4faef1.stroke();
            }
            _0x4faef1.globalAlpha = 0x1, this.drawCircle(_0x4faef1, ogario.biggerSTECellsCache, 0x2f8, 0x4, 0.4, "#BE00FF");
          }
          if (_0x2127b2.oppRings) {
            var _0x29356e = 0xe + 0x2 / ogario.viewScale,
              _0x2f0aac = 0xc + 0x1 / ogario.viewScale;
            this.drawCircle(_0x4faef1, ogario.biggerSTECellsCache, _0x29356e, _0x2f0aac, 0.75, "#BE00FF"), this.drawCircle(_0x4faef1, ogario.biggerCellsCache, _0x29356e, _0x2f0aac, 0.75, "#FF0A00"), this.drawCircle(_0x4faef1, ogario.smallerCellsCache, _0x29356e, _0x2f0aac, 0.75, '#00C8FF'), this.drawCircle(_0x4faef1, ogario.STECellsCache, _0x29356e, _0x2f0aac, 0.75, '#64FF00');
          }
          if (_0x2127b2.cursorTracking && ogario.setCursorPosition) {
            ogario.setCursorPosition(), _0x4faef1.lineWidth = 0x4, _0x4faef1.globalAlpha = _0x39e92b.darkTheme ? 0.75 : 0.35, _0x4faef1.strokeStyle = _0x39e92b.cursorTrackingColor, _0x4faef1.beginPath();
            for (_0x33bdc3 = 0x0; _0x33bdc3 < ogario.playerCells.length; _0x33bdc3++) _0x4faef1.moveTo(ogario.playerCells[_0x33bdc3]['x'], ogario.playerCells[_0x33bdc3]['y']), _0x4faef1.lineTo(ogario.cursorX, ogario.cursorY);
            _0x4faef1.stroke(), _0x4faef1.globalAlpha = 0x1;
          }
        }
        ogario.playerCells = [], (_0x2127b2.splitRange || _0x2127b2.oppRings) && (ogario.biggerSTECellsCache = [], ogario.biggerCellsCache = [], ogario.smallerCellsCache = [], ogario.STECellsCache = []), this.updateQuest();
      },
      'setVirusColor': function(_0x40a6b8) {
        return Math.floor(_0x40a6b8 * _0x40a6b8 / 0x64) > 0xb7 ? "#C80000" : _0x39e92b.virusColor;
      },
      'setVirusStrokeColor': function(_0x23f77a) {
        return ogario.play && 0x0 != ogario.playerMaxMass ? Math.floor(_0x23f77a * _0x23f77a / 0x64) / (this.selectBiggestCell ? ogario.playerMaxMass : ogario.playerMinMass) > 0.76 ? "#FFDC00" : "#C80000" : _0x39e92b.virusStrokeColor;
      },
      'setOppColor': function(_0x4c3bc3, _0x660ce7) {
        if (_0x660ce7) return _0x234c62.color;
        var _0x3a15f3 = Math.floor(_0x4c3bc3 * _0x4c3bc3 / 0x64),
          _0x256cd5 = this.selectBiggestCell ? ogario.playerMaxMass : ogario.playerMinMass,
          _0x3a2c9e = _0x3a15f3 / _0x256cd5;
        return _0x3a2c9e && _0x3a2c9e > 0x0 ? _0x3a2c9e > 0xb ? '#FF008C' : _0x3a2c9e >= 2.5 ? "#BE00FF" : _0x3a2c9e >= 1.25 ? "#FF0A00" : _0x3a2c9e < 1.25 && _0x3a2c9e > 0.75 ? '#FFDC00' : _0x3a2c9e > (_0x256cd5 < 0x3e8 ? 0.35 : 0.38) ? '#00C8FF' : "#64FF00" : void 0x0;
      },
      'setAutoHideCellInfo': function(_0x34a140) {
        return _0x34a140 <= 0x28 || ogario.viewScale < 0.5 && _0x34a140 < 0x226 && _0x34a140 < 0x19 / ogario.viewScale;
      },
      'setParty': function() {
        var window = jQuery("#party-token")["val"]();
        if (this.gameMode = ogario.gameMode = jQuery("#gamemode")["val"](), this.setQuest(), ":party" === this.gameMode && window) {
          var _0x189b1e = window; - 0x1 != window.indexOf('#') && (_0x189b1e = (window = window.split('#'))[0x1]), this.partyToken !== _0x189b1e && (this.partyToken = _0x189b1e, this.flushSkinsMap(), this.flushChatData(), this.cancelTargeting());
        }
      },
      'createParty': function() {
        jQuery("#create-party-btn")["click"]();
      },
      'joinParty': function() {
        var window = jQuery("#party-token")["val"]();
        window && (jQuery("#pre-join-party-btn")["click"](), jQuery('.party-token')["val"](window), jQuery("#join-party-btn")["click"]());
      },
      'leaveParty': function() {
        jQuery("#party-token, .party-token")["val"](''), jQuery("#leave-party-btn")['click'](), _0x1d0bd2('/');
      },
      'closeParty': function() {
        jQuery("#party-token, .party-token")['val'](''), jQuery('.party-icon-back')["click"](), _0x1d0bd2('/');
      },
      'flushData': function() {
        this.flushPartyData(), this.flushSkinsMap(), this.flushChatData(), this.cancelTargeting(), ogario.play = !0x1, ogario.playerColor = null;
      },
      'flushPartyData': function() {
        this.teamPlayers = [], this.parties = [], this.lastSentNick = '', this.lastSentClanTag = null, this.lastSentSkinURL = '', this.lastSentCustomColor = '', this.lastSentPartyToken = '', this.lastSentServerToken = '';
      },
      'flushCells': function() {
        this.cells = {};
      },
      'flushSkinsMap': function() {
        this.customSkinsMap = {};
      },
      'flushChatData': function() {
        this.chatUsers = {};
      },
      'onInit': function() {
        this.initialized || (this.isSocketOpen() || this.connect(), this.getDefaultSettings(), this.initialized = !0x0, _0x58f8a8(), _0x29d6f5());
      },
      'getWS': function(_0x77f3b) {
        _0x77f3b && (this.ws = _0x77f3b, this.createServerToken(), this.updateServerInfo(), this.onInit(), -0x1 == this.ws.indexOf("agar.io") && this.closeConnection());
      },
      'recreateWS': function(_0x2ee65b) {
        if (!_0x2ee65b) return null;
        var ogario = null;
        if (/^[a-zA-Z0-9=+\/]{12,}$/ ["test"](_0x2ee65b)) {
          var jQuery = atob(_0x2ee65b);
          /[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/ ["test"](jQuery) && (ogario = "ws://ip-" + jQuery.replace(/\./g, '-')["replace"](':', ".tech.agar.io:"));
        }
        return !ogario && /^[a-z0-9]{5,}$/ ["test"](_0x2ee65b) && (ogario = "ws://live-arena-" + _0x2ee65b + ".agar.io:80"), ogario;
      },
      'createServerToken': function() {
        var ogario = this.ws.match(/ip-\d+/),
          jQuery = this.ws.match(/live-arena-([\w\d]+)/),
          _0x4d9d33 = null;
        ogario && ((ogario = this.ws.replace('.tech.agar.io', '')['replace'](/-/g, '.')["match"](/[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}:[0-9]{1,4}/)) && (this.serverIP = ogario[0x0], _0x4d9d33 = btoa(this.serverIP)));
        if (!_0x4d9d33 && jQuery && (this.serverArena = jQuery[0x1], _0x4d9d33 = this.serverArena), _0x4d9d33) {
          this.serverToken !== _0x4d9d33 && (this.serverToken = _0x4d9d33, this.flushData(), this.flushCells()), this.partyToken = '';
          var _0x55c438 = this.ws.match(/party_id=([A-Z0-9]{6})/);
          _0x55c438 && (this.partyToken = _0x55c438[0x1], _0x1d0bd2('/#' + window.encodeURIComponent(this.partyToken)));
        }
      },
      'updateServerInfo': function() {
        jQuery("#server-ws")["val"](this.ws), jQuery("#server-token")["val"](this.serverToken), jQuery("#party-token, .party-token")["val"](this.partyToken);
      },
      'gameServerConnect': function(_0x9ef1b4) {
        _0x9ef1b4 && (this.skipServerData = !0x0, window.core && window.core.connect && window.core.connect(_0x9ef1b4));
      },
      'gameServerReconnect': function() {
        window.MC && window.MC.reconnect && window.MC.reconnect();
      },
      'gameServerJoin': function(_0xdf0791) {
        var ogario = this.recreateWS(_0xdf0791);
        ogario && (this.skipServerData = !0x0, this.gameServerConnect(ogario));
      },
      'connect': function() {
        this.closeConnection(), this.flushData(), this.setParty(), console.log('OGARio by szymy: Connecting to server'), this.privateMode && this.privateIP ? this.socket = new WebSocket(this.privateIP) : this.socket = new WebSocket(this.publicIP), this.socket.ogarioWS = !0x0, this.socket.binaryType = "arraybuffer";
        var window = this;
        this.socket.onopen = function() {
          console.log("OGARio by szymy: Socket open");
          var ogario = window.createView(0x3);
          ogario.setUint8(0x0, 0x0), ogario.setUint16(0x1, 0x191, !0x0), window.sendBuffer(ogario), window.sendPartyData();
        }, this.socket.onmessage = function(_0x250486) {
          window.handleMessage(_0x250486);
        }, this.socket.onclose = function(_0x43e421) {
          window.flushData(), console.log("OGARio by szymy: Socket close");
        }, this.socket.onerror = function(_0x5162cd) {
          window.flushData(), console.log("OGARio by szymy: Socket error");
        };
      },
      'closeConnection': function() {
        if (this.socket) {
          this.socket.onmessage = null;
          try {
            this.socket.close();
          } catch (_0x5bfcef) {}
          this.socket = null;
        }
      },
      'reconnect': function() {
        this.setParty();
        var window = this;
        setTimeout(function() {
          window.connect();
        }, 0x3e8);
      },
      'switchServerMode': function() {
        this.privateIP && (this.privateMode = !this.privateMode, this.isSocketOpen() && (this.closeConnection(), toastr.error("Zamknięto połączenie z serwerem!")), this.privateMode ? (toastr.info("Przełączono na serwer prywatny!"), jQuery(".party-panel")['show']()) : (toastr.info("Przełączono na serwer publiczny!"), jQuery("#active-parties")["empty"](), jQuery(".party-panel")["hide"]()), this.onJoin(), ogario.play && this.onPlayerSpawn());
      },
      'isSocketOpen': function() {
        return null !== this.socket && this.socket.readyState === this.socket.OPEN;
      },
      'createView': function(_0x5b1787) {
        return new DataView(new ArrayBuffer(_0x5b1787));
      },
      'strToBuff': function(_0x4c5e37, _0x507e73) {
        var jQuery = this.createView(0x1 + 0x2 * _0x507e73.length);
        jQuery.setUint8(0x0, _0x4c5e37);
        for (var _0x47e505 = 0x0; _0x47e505 < _0x507e73.length; _0x47e505++) jQuery.setUint16(0x1 + 0x2 * _0x47e505, _0x507e73.charCodeAt(_0x47e505), !0x0);
        return jQuery;
      },
      'sendBuffer': function(_0x115f6d) {
        this.socket.send(_0x115f6d.buffer);
      },
      'handleMessage': function(_0x4f4767) {
        this.readMessage(new DataView(_0x4f4767.data));
      },
      'readMessage': function(_0x45099d) {
        switch (_0x45099d.getUint8(0x0)) {
          case 0x0:
            this.playerID = _0x45099d.getUint32(0x1, !0x0);
            break;
          case 0x1:
            this.sendPlayerUpdate();
            break;
          case 0x14:
            this.updateTeamPlayer(_0x45099d);
            break;
          case 0x1e:
            this.updateTeamPlayerPosition(_0x45099d);
            break;
          case 0x60:
            this.updateParties(_0x45099d), this.displayParties();
            break;
          case 0x64:
            this.readChatMessage(_0x45099d);
        }
      },
      'sendPlayerState': function(_0x2fe621) {
        if (this.isSocketOpen()) {
          var ogario = this.createView(0x1);
          ogario.setUint8(0x0, _0x2fe621), this.sendBuffer(ogario);
        }
      },
      'sendPlayerSpawn': function() {
        this.sendPlayerState(0x1);
      },
      'sendPlayerDeath': function() {
        this.sendPlayerState(0x2);
      },
      'sendPlayerJoin': function() {
        this.sendPlayerState(0x3);
      },
      'sendPlayerData': function(_0x486379, _0x301f68, _0x5168eb) {
        null !== this[_0x301f68] && this[_0x301f68] === _0x5168eb || this.isSocketOpen() && (this.sendBuffer(this.strToBuff(_0x486379, _0x5168eb)), this[_0x301f68] = _0x5168eb);
      },
      'sendPlayerNick': function() {
        this.sendPlayerData(0xa, "lastSentNick", _0x234c62.nick);
      },
      'sendPlayerClanTag': function() {
        this.sendPlayerData(0xb, "lastSentClanTag", _0x234c62.clanTag);
      },
      'sendPlayerSkinURL': function() {
        this.sendPlayerData(0xc, "lastSentSkinURL", _0x234c62.skinURL);
      },
      'sendPlayerCustomColor': function() {
        this.sendPlayerData(0xd, "lastSentCustomColor", _0x234c62.color);
      },
      'sendPlayerColor': function() {
        this.isSocketOpen() && ogario.playerColor && this.sendBuffer(this.strToBuff(0xe, ogario.playerColor));
      },
      'sendPartyToken': function() {
        this.setParty(), this.sendPlayerData(0xf, 'lastSentPartyToken', this.partyToken);
      },
      'sendServerToken': function() {
        this.sendPlayerData(0x10, "lastSentServerToken", this.serverToken);
      },
      'sendServerJoin': function() {
        this.sendServerToken(), this.sendPlayerJoin();
      },
      'sendServerRegion': function() {
        if (this.region) {
          var window = this.region.split('-');
          this.isSocketOpen() && this.sendBuffer(this.strToBuff(0x11, window[0x0]));
        }
      },
      'sendServerGameMode': function() {
        var window = "FFA";
        switch (this.gameMode) {
          case ':teams':
            window = 'TMS';
            break;
          case ":experimental":
            window = "EXP";
            break;
          case ":party":
            window = "PTY";
        }
        this.isSocketOpen() && this.sendBuffer(this.strToBuff(0x12, window));
      },
      'sendServerData': function() {
        this.skipServerData ? this.skipServerData = !0x1 : (this.region = jQuery("#region")['val'](), this.gameMode = jQuery("#gamemode")["val"](), this.sendServerRegion(), this.sendServerGameMode());
      },
      'sendPartyData': function() {
        this.sendPlayerClanTag(), this.sendPartyToken(), this.sendServerToken(), this.sendPlayerNick(), this.sendPlayerSkinURL();
      },
      'sendPlayerUpdate': function() {
        if (this.isSocketOpen() && ogario.play && this.playerID && ogario.playerColor) {
          function _0x42066b(_0x2d08d0) {
            for (var ogario = 0x0; ogario < _0x2d08d0.length; ogario++) _0x15dad1.setUint16(_0x5a6bd0, _0x2d08d0.charCodeAt(ogario), !0x0), _0x5a6bd0 += 0x2;
            _0x15dad1.setUint16(_0x5a6bd0, 0x0, !0x0), _0x5a6bd0 += 0x2;
          }
          var jQuery = 0x29;
          jQuery += 0x2 * _0x234c62.nick.length, jQuery += 0x2 * _0x234c62.skinURL.length;
          var _0x15dad1 = this.createView(jQuery);
          _0x15dad1.setUint8(0x0, 0x14), _0x15dad1.setUint32(0x1, this.playerID, !0x0);
          var _0x5a6bd0 = 0x5;
          _0x42066b(_0x234c62.nick), _0x42066b(_0x234c62.skinURL), _0x42066b(_0x234c62.color), _0x42066b(ogario.playerColor), this.sendBuffer(_0x15dad1);
        }
      },
      'sendPlayerPosition': function() {
        if (this.isSocketOpen() && ogario.play && this.playerID) {
          var window = this.createView(0x11);
          window.setUint8(0x0, 0x1e), window.setUint32(0x1, this.playerID, !0x0), window.setInt32(0x5, this.getPlayerX(), !0x0), window.setInt32(0x9, this.getPlayerY(), !0x0), void 0x0 !== ogario.playerMass ? window.setUint32(0xd, ogario.playerMass, !0x0) : window.setUint32(0xd, this.playerMass, !0x0), this.sendBuffer(window);
        }
      },
      'checkPlayerID': function(_0x3e7b4b) {
        if (_0x3e7b4b)
          for (var ogario = 0x0; ogario < this.teamPlayers.length; ogario++)
            if (this.teamPlayers[ogario]['id'] == _0x3e7b4b) return ogario;
        return null;
      },
      'updateTeamPlayer': function(_0x1c665b) {
        function _0xa0bff1() {
          for (var _0xa0bff1 = '';;) {
            var jQuery = _0x1c665b.getUint16(_0x2f87c4, !0x0);
            if (0x0 == jQuery) break;
            _0xa0bff1 += String.fromCharCode(jQuery), _0x2f87c4 += 0x2;
          }
          return _0x2f87c4 += 0x2, _0xa0bff1;
        }
        var jQuery = _0x1c665b.getUint32(0x1, !0x0),
          _0x2f87c4 = 0x5,
          _0x428de8 = _0xa0bff1(),
          _0x200ff9 = this.checkSkinURL(_0xa0bff1()),
          _0x48472e = _0xa0bff1(),
          _0x5642c9 = _0xa0bff1(),
          _0x471f4e = ":party" === this.gameMode ? _0x428de8 + _0x5642c9 : _0x428de8,
          _0x541598 = this.checkPlayerID(jQuery);
        if (null !== _0x541598) this.teamPlayers[_0x541598]['nick'] = _0x428de8, this.teamPlayers[_0x541598]['skinID'] = _0x471f4e, this.teamPlayers[_0x541598]["skinURL"] = _0x200ff9, this.teamPlayers[_0x541598]["setColor"](_0x48472e);
        else {
          var _0x50a502 = new function(_0x29d0ad, _0x50fc8e, _0x2b0679, _0x248c5e) {
            this.id = _0x29d0ad, this.nick = _0x50fc8e, this.skinID = _0x2b0679, this.skinURL = _0x248c5e, this.x = 0x0, this.y = 0x0, this.lastX = 0x0, this.lastY = 0x0, this.mass = 0x0, this.clanTag = '', this.color = _0x39e92b.miniMapTeammatesColor, this.alive = !0x1, this.updateTime = null, this.pi2 = 0x2 * Math.PI, this.setColor = function(_0x523b49) {
              0x7 == _0x523b49.length && (this.color = _0x523b49);
            }, this.drawPosition = function(_0x51a0c9, _0x1bf3e3, _0x216efd, _0x53e316, _0x4275bd) {
              if (!(!this.alive || _0x53e316 && _0x4275bd && this.id != _0x4275bd)) {
                this.lastX = (0x1d * this.lastX + this.x) / 0x1e, this.lastY = (0x1d * this.lastY + this.y) / 0x1e;
                var _0x170a1f = (this.lastX + _0x1bf3e3) * _0x216efd,
                  _0x530885 = (this.lastY + _0x1bf3e3) * _0x216efd;
                this.nick.length > 0x0 && (_0x51a0c9.font = _0x39e92b.miniMapNickFontWeight + ' ' + _0x39e92b.miniMapNickSize + "px " + _0x39e92b.miniMapNickFontFamily, _0x51a0c9.textAlign = 'center', _0x39e92b.miniMapNickStrokeSize > 0x0 && (_0x51a0c9.lineWidth = _0x39e92b.miniMapNickStrokeSize, _0x51a0c9.strokeStyle = _0x39e92b.miniMapNickStrokeColor, _0x51a0c9.strokeText(this.nick, _0x170a1f, _0x530885 - (0x2 * _0x39e92b.miniMapTeammatesSize + 0x2))), _0x51a0c9.fillStyle = _0x39e92b.miniMapNickColor, _0x51a0c9.fillText(this.nick, _0x170a1f, _0x530885 - (0x2 * _0x39e92b.miniMapTeammatesSize + 0x2))), _0x51a0c9.beginPath(), _0x51a0c9.arc(_0x170a1f, _0x530885, _0x39e92b.miniMapTeammatesSize, 0x0, this.pi2, !0x1), _0x51a0c9.closePath(), _0x2127b2.oneColoredTeammates ? _0x51a0c9.fillStyle = _0x39e92b.miniMapTeammatesColor : _0x51a0c9.fillStyle = this.color, _0x51a0c9.fill();
              }
            };
          }(jQuery, _0x428de8, _0x471f4e, _0x200ff9);
          _0x50a502.setColor(_0x48472e), this.teamPlayers.push(_0x50a502);
        }
        this.cacheCustomSkin(_0x428de8, _0x5642c9, _0x200ff9);
      },
      'updateTeamPlayerPosition': function(_0x4e3ea0) {
        var ogario = _0x4e3ea0.getUint32(0x1, !0x0),
          jQuery = this.checkPlayerID(ogario);
        if (null !== jQuery) {
          var _0x124d23 = _0x4e3ea0.getInt32(0x5, !0x0),
            _0x1d93fe = _0x4e3ea0.getInt32(0x9, !0x0),
            _0x8c19be = _0x4e3ea0.getUint32(0xd, !0x0);
          if (_0x8c19be > 0x57e40) return;
          var _0x543086 = this.teamPlayers[jQuery];
          _0x543086.x = _0x124d23, _0x543086.y = _0x1d93fe, _0x543086.mass = _0x8c19be, _0x543086.alive = !0x0, _0x543086.updateTime = Date.now(), this.targeting && this.targetID && ogario == this.targetID && this.updateTarget(_0x543086.nick, _0x543086.skinURL, _0x124d23, _0x1d93fe, _0x8c19be);
        }
      },
      'updateTeamPlayers': function() {
        this.sendPlayerPosition(), this.chatUsers = {}, this.top5 = [];
        for (var window = 0x0; window < this.teamPlayers.length; window++) {
          var ogario = this.teamPlayers[window];
          (ogario.alive && Date.now() - ogario.updateTime >= 0x7d0 || 0x0 == ogario.mass) && (ogario.alive = !0x1, this.targeting && this.targetID && ogario.id == this.targetID && this.setTargetStatus(0x2)), ogario.alive && (this.top5.push({
            'id': ogario.id,
            'nick': ogario.nick,
            'mass': ogario.mass
          }), this.isChatUserMuted(ogario.id) || this.addChatUser(ogario.id, ogario.nick));
        }
        this.top5.sort(function(_0x1f7e74, _0x2d41c6) {
          return _0x2d41c6.mass - _0x1f7e74.mass;
        }), this.displayTop5();
      },
      'updateParties': function(_0x41b3c5) {
        this.parties = [];
        for (var ogario = _0x41b3c5.getUint8(0x1), jQuery = 0x2, _0x5e5c51 = 0x0; _0x5e5c51 < ogario; _0x5e5c51++) {
          for (var _0x3abd6b = '';;) {
            var _0x3f493a = _0x41b3c5.getUint16(jQuery, !0x0);
            if (0x0 == _0x3f493a) break;
            _0x3abd6b += String.fromCharCode(_0x3f493a), jQuery += 0x2;
          }
          jQuery += 0x2, this.parties.push(_0x3abd6b);
        }
      },
      'readChatMessage': function(_0x59d0af) {
        if (!_0x2127b2.disableChat) {
          var ogario = new Date()["toTimeString"]()["replace"](/^(\d{2}:\d{2}).*/, '$1'),
            jQuery = _0x59d0af.getUint8(0x1),
            _0x30ea23 = _0x59d0af.getUint32(0x2, !0x0),
            _0x24b947 = _0x59d0af.getUint32(0x6, !0x0);
          if (!(this.isChatUserMuted(_0x30ea23) || 0x0 != _0x24b947 && _0x24b947 != this.playerID && _0x30ea23 != this.playerID)) {
            for (var _0x3cd8f3 = '', _0x39e244 = 0xa; _0x39e244 < _0x59d0af.byteLength; _0x39e244 += 0x2) {
              var _0x1f33c8 = _0x59d0af.getUint16(_0x39e244, !0x0);
              if (0x0 == _0x1f33c8) break;
              _0x3cd8f3 += String.fromCharCode(_0x1f33c8);
            }
            this.displayChatMessage(ogario, jQuery, _0x30ea23, _0x3cd8f3);
          }
        }
      },
      'sendChatMessage': function(_0xae481e, _0x2be76d) {
        if (!(Date.now() - this.lastMessageSentTime < 0x1f4 || 0x0 == _0x2be76d.length || 0x0 == _0x234c62.nick.length) && this.isSocketOpen()) {
          _0x2be76d = _0x234c62.nick + ': ' + _0x2be76d;
          var jQuery = this.createView(0xa + 0x2 * _0x2be76d.length);
          jQuery.setUint8(0x0, 0x64), jQuery.setUint8(0x1, _0xae481e), jQuery.setUint32(0x2, this.playerID, !0x0), jQuery.setUint32(0x6, 0x0, !0x0);
          for (var _0x4ec8ed = 0x0; _0x4ec8ed < _0x2be76d.length; _0x4ec8ed++) jQuery.setUint16(0xa + 0x2 * _0x4ec8ed, _0x2be76d.charCodeAt(_0x4ec8ed), !0x0);
          this.sendBuffer(jQuery), this.lastMessageSentTime = Date.now();
        }
      },
      'prepareCommand': function(_0x129b3c) {
        return _0x129b3c.replace("%currentSector%", this.currentSector);
      },
      'sendCommand': function(_0x50a910) {
        var ogario = this.prepareCommand(_0x5c099a["comm" + _0x50a910]);
        this.sendChatMessage(0x66, ogario);
      },
      'addChatUser': function(_0x115673, _0x2c8bd7) {
        this.chatUsers[_0x115673] = _0x2c8bd7;
      },
      'getChatUserNick': function(_0x846e77) {
        return this.chatUsers.hasOwnProperty(_0x846e77) ? this.chatUsers[_0x846e77] : '';
      },
      'muteChatUser': function(_0x1900a4) {
        if (_0x1900a4 && !this.isChatUserMuted(_0x1900a4)) {
          var ogario = this.getChatUserNick(_0x1900a4);
          this.chatMutedUsers[_0x1900a4] = ogario, this.chatMutedUserIDs.push(_0x1900a4), toastr.error(_0x5a1e0a.userMuted.replace('%user%', "<strong>" + this.escapeHTML(ogario) + '</strong>') + " <button data-user-id="" + _0x1900a4 + "" class="btn btn-xs btn-green btn-unmute-user">" + _0x5a1e0a.unmute + "</button>");
        }
      },
      'unmuteChatUser': function(_0x498503) {
        if (_0x498503) {
          var ogario = this.chatMutedUserIDs.indexOf(_0x498503); - 0x1 != ogario && (this.chatMutedUserIDs.splice(ogario, 0x1), toastr.info(_0x5a1e0a.userUnmuted.replace("%user%", "<strong>" + this.escapeHTML(this.chatMutedUsers[_0x498503]) + "</strong>")), delete this.chatMutedUsers[_0x498503]);
        }
      },
      'isChatUserMuted': function(_0x592f36) {
        return -0x1 != this.chatMutedUserIDs.indexOf(_0x592f36);
      },
      'parseMessage': function(_0x2398f1) {
        var ogario = /\[img\](https?:\/\/i\.(?:imgur|hizliresim)\.com\/\w{6,8}\.(?:jpg|jpeg|png|gif)\??\d*)\[\/img\]/i;
        if (ogario.test(_0x2398f1)) return _0x2127b2.showChatImages ? "<img src="" + _0x2398f1.match(ogario)[0x1] + "" style="width:100%;border:none;">" : '';
        var jQuery = /\[yt\]([\w-]{11})\[\/yt\]/i;
        if (jQuery.test(_0x2398f1)) return _0x2127b2.showChatVideos ? '<iframe type=\"text/html\" width=\"100%\" height=\"auto\" src=\"http://www.youtube.com/embed/' + _0x2398f1.match(jQuery)[0x1] + "?autoplay=1&amp;vq=tiny" frameborder="0" />" : '';
        var _0x8afd6e = this.escapeHTML(_0x2398f1);
        return _0x2127b2.chatEmoticons && (_0x8afd6e = this.parseEmoticons(_0x8afd6e)), _0x8afd6e;
      },
      'parseEmoticons': function(_0x16c3ad) {
        return String(_0x16c3ad)["replace"](/\&lt\;3/g, '<3')["replace"](/(O\:\)|3\:\)|8\=\)|\:\)|\;\)|\=\)|\:D|X\-D|\=D|\:\(|\;\(|\:P|\;P|\:\*|\$\)|\<3|\:o|\(\:\||\:\||\:\\|\:\@|\|\-\)|\^\_\^|\-\_\-|\$\_\$|\(poop\)|\(fuck\)|\(clap\)|\(ok\)|\(victory\)|\(y\)|\(n\))/g, function(_0x514302) {
          return "<img src="http://cdn.ogario.ovh/static/emoticons/" + _0x44408e[_0x514302] + "" alt="" + _0x514302 + '\" class=\"emoticon\">';
        });
      },
      'displayChatMessage': function(_0x4a22b3, _0x50007b, _0xcf3d65, _0x35ddff) {
        if (0x0 != _0x35ddff.length) {
          var _0x3529ff = _0x35ddff.split(': ', 0x1)["toString"](),
            _0x16a8de = this.parseMessage(_0x35ddff.replace(_0x3529ff + ': ', ''));
          if (!(0x0 == _0x3529ff.length || _0x3529ff.length > 0xf || 0x0 == _0x16a8de.length)) {
            var _0x59b3da = '';
            if (0x0 != _0xcf3d65 && _0xcf3d65 != this.playerID && (this.addChatUser(_0xcf3d65, _0x3529ff), _0x59b3da = "<a href="#" data-user-id="" + _0xcf3d65 + '\" class=\"mute-user ogicon-user-minus\"></a> '), _0x3529ff = this.escapeHTML(_0x3529ff), 0x65 == _0x50007b) {
              if (_0x2127b2.showChatBox) return jQuery("#chat-box")["append"]("<div class="message"><span class="message-time">[" + _0x4a22b3 + '] </span>' + _0x59b3da + "<span class="message-nick">" + _0x3529ff + ": </span><span class="message-text">" + _0x16a8de + "</span></div>"), jQuery("#chat-box")["perfectScrollbar"]("update"), jQuery("#chat-box")["animate"]({
                'scrollTop': jQuery("#chat-box")["prop"]("scrollHeight")
              }, 0x1f4), void(_0x2127b2.chatSounds && this.playSound(this.messageSound));
              _0x2127b2.hideChat || (toastr.success('<span class=\"message-nick\">' + _0x3529ff + ": </span><span class="message-text">" + _0x16a8de + '</span>' + _0x59b3da), _0x2127b2.chatSounds && this.playSound(this.messageSound)), this.chatHistory.push({
                'nick': _0x3529ff,
                'message': _0x16a8de
              }), this.chatHistory.length > 0xf && this.chatHistory.shift();
            } else if (0x66 == _0x50007b) {
              if (_0x2127b2.showChatBox) return jQuery('#chat-box')['append']("<div class="message command"><span class="command-time">[" + _0x4a22b3 + "] </span>" + _0x59b3da + "<span class="command-nick">" + _0x3529ff + ": </span><span class="command-text">" + _0x16a8de + "</span></div>"), jQuery("#chat-box")["perfectScrollbar"]("update"), jQuery("#chat-box")["animate"]({
                'scrollTop': jQuery("#chat-box")['prop']("scrollHeight")
              }, 0x1f4), void(_0x2127b2.chatSounds && this.playSound(this.commandSound));
              _0x2127b2.hideChat || (toastr.warning("<span class="command-nick">" + _0x3529ff + ": </span><span class="command-text">" + _0x16a8de + '</span>' + _0x59b3da), _0x2127b2.chatSounds && this.playSound(this.commandSound));
            } else jQuery('#messages')["append"](_0x35ddff);
          }
        }
      },
      'displayUserList': function(_0x4bb569, _0x222e9d, _0x5d17dd, _0x1ea03d, _0x1c7961) {
        var _0x41afe5 = '';
        if (Object.keys(_0x4bb569)["length"]) {
          for (var _0x5076dd in _0x41afe5 += "<ol class="user-list">", _0x4bb569) _0x4bb569.hasOwnProperty(_0x5076dd) && (_0x41afe5 += "<li><strong>" + this.escapeHTML(_0x4bb569[_0x5076dd]) + '</strong> <button data-user-id=\"' + _0x5076dd + "" class="btn btn-xs " + _0x5d17dd + '\">' + _0x1ea03d + "</button></li>");
          _0x41afe5 += "</ol>";
        } else _0x41afe5 += _0x5a1e0a.none;
        toastr[_0x1c7961](_0x41afe5, _0x222e9d, {
          'closeButton': !0x0,
          'tapToDismiss': !0x1
        });
      },
      'displayChatActiveUsers': function() {
        this.displayUserList(this.chatUsers, _0x5a1e0a.activeUsers, "btn-red btn-mute-user", _0x5a1e0a.mute, 'info');
      },
      'displayChatMutedUsers': function() {
        this.displayUserList(this.chatMutedUsers, _0x5a1e0a.mutedUsers, "btn-green btn-unmute-user", _0x5a1e0a.unmute, "error");
      },
      'preloadChatSounds': function() {
        this.setMessageSound(), this.setCommandSound();
      },
      'setChatSoundsBtn': function() {
        _0x2127b2.chatSounds ? jQuery('.chat-sound-notifications')['removeClass']('ogicon-volume-mute2')["addClass"]('ogicon-volume-high') : jQuery(".chat-sound-notifications")["removeClass"]("ogicon-volume-high")["addClass"]("ogicon-volume-mute2");
      },
      'setMessageSound': function() {
        this.messageSound = this.setSound(_0x2127b2.messageSound);
      },
      'setCommandSound': function() {
        this.commandSound = this.setSound(_0x2127b2.commandSound);
      },
      'setSound': function(_0x152ca0) {
        return _0x152ca0 ? new Audio(_0x152ca0) : null;
      },
      'playSound': function(_0x44a421) {
        _0x44a421 && _0x44a421.play && (_0x44a421.pause(), _0x44a421.currentTime = 0x0, _0x44a421.play());
      },
      'setTargeting': function() {
        this.targetID && (this.targeting = !this.targeting, ogario.targeting = this.targeting, this.setTargetingInfo());
      },
      'setTargetingInfo': function() {
        this.targeting ? (jQuery("#set-targeting")["addClass"]("active"), jQuery('#target-status')["show"](), 0x2 != this.targetStatus && jQuery("#target-summary")["show"]()) : (jQuery("#set-targeting")['removeClass']("active"), jQuery("#target-summary, #target-status")['hide']());
      },
      'cancelTargeting': function() {
        this.setTargetStatus(0x0);
      },
      'setPrivateMiniMap': function() {
        this.targetID && (this.privateMiniMap = !this.privateMiniMap, this.privateMiniMap ? jQuery('#set-private-minimap')['addClass']("active") : jQuery("#set-private-minimap")['removeClass']('active'));
      },
      'setTarget': function(_0x4c12f1) {
        var ogario = this.checkPlayerID(_0x4c12f1);
        if (null !== ogario) {
          var jQuery = this.teamPlayers[ogario];
          if (this.targetID = jQuery.id, this.updateTarget(jQuery.nick, jQuery.skinURL, jQuery.x, jQuery.y, jQuery.mass), !jQuery.alive) return void this.setTargetStatus(0x2);
          this.setTargetStatus(0x1);
        } else this.setTargetStatus(0x0);
      },
      'setTargetStatus': function(_0x588727) {
        switch (_0x588727) {
          case 0x0:
            this.targetStatus = 0x0, this.targetID = 0x0, this.targetNick = '', this.targetSkinURL = '', this.targeting = !0x1, ogario.targeting = !0x1, this.privateMiniMap = !0x1, jQuery("#target-skin, #target-nick, #target-summary")["hide"](), jQuery("#target-status")["show"]()["text"]('[' + _0x5a1e0a.targetNotSet + ']'), jQuery("#target-panel-hud a")["removeClass"]('active');
            break;
          case 0x1:
            this.targetStatus = 0x1, this.targeting || (this.targeting = !0x0, ogario.targeting = !0x0, this.setTargetingInfo()), jQuery("#target-skin, #target-nick, #target-status, #target-summary")["show"]();
            break;
          case 0x2:
            this.targetStatus = 0x2, jQuery('#target-summary')['hide'](), jQuery("#target-status")["show"]()["text"]('[' + _0x5a1e0a.targetDead + ']'), ogario.resetTargetPosition();
        }
      },
      'changeTarget': function() {
        for (var window = this.checkPlayerID(this.targetID), ogario = null, jQuery = 0x0; jQuery < this.teamPlayers.length; jQuery++)
          if (this.teamPlayers[jQuery]["alive"]) {
            if (null === window) {
              window = jQuery;
              break;
            }
            if (jQuery < window && null === ogario) ogario = jQuery;
            else if (jQuery > window) {
              ogario = jQuery;
              break;
            }
          }
        null !== ogario && (window = ogario), null !== window ? this.setTarget(this.teamPlayers[window]['id']) : this.setTargetStatus(0x0);
      },
      'updateTarget': function(_0x2154f2, _0x347afb, _0x3cdb07, _0xfc9d6, _0x1232a5) {
        ogario.setTargetPosition(_0x3cdb07, _0xfc9d6), this.targetNick !== _0x2154f2 && (this.targetNick = _0x2154f2, jQuery("#target-nick")["html"](this.escapeHTML(_0x2154f2))), _0x347afb && this.targetSkinURL !== _0x347afb && (this.targetSkinURL = _0x347afb, jQuery("#target-skin img")["attr"]("src", _0x347afb)), jQuery("#target-status")["text"]('[' + _0x1232a5 + ']');
        var _0x5836d3 = this.calculateTargetSector(_0x3cdb07, _0xfc9d6),
          _0x32c351 = _0x5a1e0a.targetDistance + ': <span class=\"hud-main-color\">' + ogario.targetDistance + ' [' + _0x5836d3 + ']</span>';
        ogario.play && (_0x32c351 += " | " + _0x5a1e0a.targetMass + ": <span class="hud-main-color">" + (_0x1232a5 + ogario.playerMass) + '</span>'), jQuery('#target-summary')["html"](_0x32c351), 0x1 != this.targetStatus && this.setTargetStatus(0x1);
      },
      'updateQuest': function() {
        this.showQuest && '' === this.gameMode && window.MC && window.MC.getQuestProgressLabel && (this.questHUD.textContent = window.MC.getQuestProgressLabel());
      },
      'init': function() {
        this.loadSettings(), this.loadProfiles(), this.setLang(), this.setMenu(), this.setUI(), _0x45d8fa && _0x45d8fa.setTheme(), this.setShowQuickMenu(), this.setShowSkinsPanel(), this.setProfile(), this.setMainButtons(), this.setStreamMode(), this.setHideSkinUrl(), this.setMiniMap(), this.setAutoResp(), this.setDisableChat(), this.setShowChatBox(), this.setTop5(), this.setTargetingHUD(), this.setQuest(), this.displayTime(), this.setCenteredLb(), this.setNormalLb(), this.setFpsAtTop(), this.displayStats(), this.setBlockPopups(), this.preDrawIndicator(), this.preDrawPellet(), this.preloadChatSounds(), this.setChatSoundsBtn();
        var window = this;
        setInterval(function() {
          window.drawMiniMap();
        }, 0x21), setInterval(function() {
          window.updateTeamPlayers();
        }, this.updateInterval);
      }
    },
    _0x52bc62 = {},
    _0x143d28 = {},
    _0x3dda57 = {
      'hk-feed': {
        'label': _0x5a1e0a["hk-feed"],
        'defaultKey': 'W',
        'keyDown': function() {
          _0x352231 && _0x352231.feed();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-macroFeed': {
        'label': _0x5a1e0a["hk-macroFeed"],
        'defaultKey': 'E',
        'keyDown': function() {
          _0x352231 && _0x352231.macroFeed(!0x0);
        },
        'keyUp': function() {
          _0x352231 && _0x352231.macroFeed(!0x1);
        },
        'type': 'normal'
      },
      'hk-split': {
        'label': _0x5a1e0a["hk-split"],
        'defaultKey': "SPACE",
        'keyDown': function() {
          _0x352231 && _0x352231.split();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-doubleSplit': {
        'label': _0x5a1e0a["hk-doubleSplit"],
        'defaultKey': 'Q',
        'keyDown': function() {
          _0x352231 && _0x352231.doubleSplit();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-popSplit': {
        'label': "Popsplit",
        'defaultKey': 'ALT+Q',
        'keyDown': function() {
          _0x352231 && _0x352231.popSplit();
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-split16': {
        'label': _0x5a1e0a["hk-split16"],
        'defaultKey': "SHIFT",
        'keyDown': function() {
          _0x352231 && _0x352231.split16();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-pause': {
        'label': _0x5a1e0a['hk-pause'],
        'defaultKey': 'R',
        'keyDown': function() {
          _0x352231 && _0x352231.setPause();
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-showTop5': {
        'label': _0x5a1e0a['hk-showTop5'],
        'defaultKey': 'T',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowTop5();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showTime': {
        'label': _0x5a1e0a["hk-showTime"],
        'defaultKey': 'ALT+T',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowTime();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showSplitRange': {
        'label': _0x5a1e0a["hk-showSplitRange"],
        'defaultKey': 'U',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowSplitRange();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showSplitInd': {
        'label': _0x5a1e0a["hk-showSplitInd"],
        'defaultKey': 'I',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowSplitInd();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showTeammatesInd': {
        'label': _0x5a1e0a["hk-showTeammatesInd"],
        'defaultKey': "ALT+I",
        'keyDown': function() {
          _0x352231 && _0x352231.setShowTeammatesInd();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showOppColors': {
        'label': _0x5a1e0a['hk-showOppColors'],
        'defaultKey': 'O',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowOppColors();
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-toggleSkins': {
        'label': _0x5a1e0a["hk-toggleSkins"],
        'defaultKey': 'A',
        'keyDown': function() {
          _0x352231 && _0x352231.toggleSkins();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-transparentSkins': {
        'label': _0x5a1e0a['hk-transparentSkins'],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.setTransparentSkins();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showSkins': {
        'label': _0x5a1e0a["hk-showSkins"],
        'defaultKey': 'S',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowSkins();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showStats': {
        'label': _0x5a1e0a["hk-showStats"],
        'defaultKey': "ALT+S",
        'keyDown': function() {
          _0x352231 && _0x352231.setShowStats();
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-toggleCells': {
        'label': _0x5a1e0a["hk-toggleCells"],
        'defaultKey': 'D',
        'keyDown': function() {
          _0x352231 && _0x352231.toggleCells();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showFood': {
        'label': _0x5a1e0a['hk-showFood'],
        'defaultKey': 'F',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowFood();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showGrid': {
        'label': _0x5a1e0a["hk-showGrid"],
        'defaultKey': 'G',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowGrid();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showMiniMapGuides': {
        'label': _0x5a1e0a["hk-showMiniMapGuides"],
        'defaultKey': "ALT+G",
        'keyDown': function() {
          _0x352231 && _0x352231.setShowMiniMapGuides();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-hideChat': {
        'label': _0x5a1e0a["hk-hideChat"],
        'defaultKey': 'H',
        'keyDown': function() {
          _0x352231 && _0x352231.hideChat();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showHUD': {
        'label': _0x5a1e0a["hk-showHUD"],
        'defaultKey': "ALT+H",
        'keyDown': function() {
          _0x352231 && _0x352231.setShowHUD();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-copyLb': {
        'label': _0x5a1e0a["hk-copyLb"],
        'defaultKey': 'L',
        'keyDown': function() {
          _0x352231 && _0x352231.copyLb();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showLb': {
        'label': _0x5a1e0a["hk-showLb"],
        'defaultKey': "ALT+L",
        'keyDown': function() {
          _0x352231 && _0x352231.setShowLb();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-toggleAutoZoom': {
        'label': _0x5a1e0a['hk-toggleAutoZoom'],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.toggleAutoZoom();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-resetZoom': {
        'label': _0x5a1e0a["hk-resetZoom"],
        'defaultKey': 'Z',
        'keyDown': function() {
          _0x352231 && _0x352231.resetZoom(!0x0);
        },
        'keyUp': function() {
          _0x352231 && _0x352231.resetZoom(!0x1);
        },
        'type': 'normal'
      },
      'hk-toggleDeath': {
        'label': _0x5a1e0a["hk-toggleDeath"],
        'defaultKey': 'X',
        'keyDown': function() {
          _0x352231 && _0x352231.toggleDeath();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-clearChat': {
        'label': _0x5a1e0a["hk-clearChat"],
        'defaultKey': 'C',
        'keyDown': function() {
          _0x352231 && _0x352231.displayChatHistory(!0x0);
        },
        'keyUp': function() {
          _0x352231 && _0x352231.displayChatHistory(!0x1);
        },
        'type': "normal"
      },
      'hk-showBgSectors': {
        'label': _0x5a1e0a["hk-showBgSectors"],
        'defaultKey': 'B',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowBgSectors();
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-hideBots': {
        'label': _0x5a1e0a["hk-hideBots"],
        'defaultKey': "ALT+B",
        'keyDown': function() {
          _0x352231 && _0x352231.setHideSmallBots();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showNames': {
        'label': _0x5a1e0a['hk-showNames'],
        'defaultKey': 'N',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowNames();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-hideTeammatesNames': {
        'label': _0x5a1e0a['hk-hideTeammatesNames'],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.setHideTeammatesNames();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showMass': {
        'label': _0x5a1e0a["hk-showMass"],
        'defaultKey': 'M',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowMass();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showMiniMap': {
        'label': _0x5a1e0a['hk-showMiniMap'],
        'defaultKey': 'ALT+M',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowMiniMap();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-chatMessage': {
        'label': _0x5a1e0a['hk-chatMessage'],
        'defaultKey': 'ENTER',
        'keyDown': function() {
          _0x352231 && _0x352231.enterChatMessage();
        },
        'keyUp': null,
        'type': "special"
      },
      'hk-quickResp': {
        'label': _0x5a1e0a["hk-quickResp"],
        'defaultKey': "TILDE",
        'keyDown': function() {
          _0x352231 && _0x352231.quickResp();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-autoResp': {
        'label': _0x5a1e0a["hk-autoResp"],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.toggleAutoResp();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-zoom1': {
        'label': _0x5a1e0a["hk-zoomLevel"] + ' 1',
        'defaultKey': 'ALT+1',
        'keyDown': function() {
          _0x352231 && _0x352231.setZoom(0.5);
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-zoom2': {
        'label': _0x5a1e0a["hk-zoomLevel"] + ' 2',
        'defaultKey': "ALT+2",
        'keyDown': function() {
          _0x352231 && _0x352231.setZoom(0.25);
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-zoom3': {
        'label': _0x5a1e0a["hk-zoomLevel"] + ' 3',
        'defaultKey': "ALT+3",
        'keyDown': function() {
          _0x352231 && _0x352231.setZoom(0.125);
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-zoom4': {
        'label': _0x5a1e0a["hk-zoomLevel"] + ' 4',
        'defaultKey': "ALT+4",
        'keyDown': function() {
          _0x352231 && _0x352231.setZoom(0.075);
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-zoom5': {
        'label': _0x5a1e0a["hk-zoomLevel"] + ' 5',
        'defaultKey': "ALT+5",
        'keyDown': function() {
          _0x352231 && _0x352231.setZoom(0.05);
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-switchServerMode': {
        'label': _0x5a1e0a["hk-switchServerMode"],
        'defaultKey': '=',
        'keyDown': function() {
          _0x352231 && _0x352231.switchServerMode();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showTargeting': {
        'label': _0x5a1e0a["hk-showTargeting"],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowTargeting();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-setTargeting': {
        'label': _0x5a1e0a["hk-setTargeting"],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.setTargeting();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-cancelTargeting': {
        'label': _0x5a1e0a['hk-cancelTargeting'],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.cancelTargeting();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-changeTarget': {
        'label': _0x5a1e0a["hk-changeTarget"],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.changeTarget();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-privateMiniMap': {
        'label': _0x5a1e0a["hk-privateMiniMap"],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.setPrivateMiniMap();
        },
        'keyUp': null,
        'type': "normal"
      },
      'hk-showQuest': {
        'label': _0x5a1e0a["hk-showQuest"],
        'defaultKey': '',
        'keyDown': function() {
          _0x352231 && _0x352231.setShowQuest();
        },
        'keyUp': null,
        'type': 'normal'
      },
      'hk-comm1': {
        'label': _0x5c099a.comm1,
        'defaultKey': '1',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x1);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm2': {
        'label': _0x5c099a.comm2,
        'defaultKey': '2',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x2);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm3': {
        'label': _0x5c099a.comm3,
        'defaultKey': '3',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x3);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm4': {
        'label': _0x5c099a.comm4,
        'defaultKey': '4',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x4);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm5': {
        'label': _0x5c099a.comm5,
        'defaultKey': '5',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x5);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm6': {
        'label': _0x5c099a.comm6,
        'defaultKey': '6',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x6);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm7': {
        'label': _0x5c099a.comm7,
        'defaultKey': '7',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x7);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm8': {
        'label': _0x5c099a.comm8,
        'defaultKey': '8',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x8);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm9': {
        'label': _0x5c099a.comm9,
        'defaultKey': '9',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x9);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm0': {
        'label': _0x5c099a.comm0,
        'defaultKey': '0',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0x0);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm10': {
        'label': _0x5c099a.comm10,
        'defaultKey': "MOUSE WHEEL",
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0xa);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm11': {
        'label': _0x5c099a.comm11,
        'defaultKey': "LEFT",
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0xb);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm12': {
        'label': _0x5c099a.comm12,
        'defaultKey': 'UP',
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0xc);
        },
        'keyUp': null,
        'type': "command"
      },
      'hk-comm13': {
        'label': _0x5c099a.comm13,
        'defaultKey': "RIGHT",
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0xd);
        },
        'keyUp': null,
        'type': 'command'
      },
      'hk-comm14': {
        'label': _0x5c099a.comm14,
        'defaultKey': "DOWN",
        'keyDown': function() {
          _0x352231 && _0x352231.sendCommand(0xe);
        },
        'keyUp': null,
        'type': "command"
      }
    },
    _0xb043c = {
      'lastPressedKey': '',
      'lastKeyId': '',
      'defaultMessageKey': "ENTER",
      'inputClassName': "custom-key-in form-control input-sm",
      'loadDefaultHotkeys': function() {
        for (var window in _0x143d28 = {}, _0x3dda57) _0x3dda57.hasOwnProperty(window) && (_0x143d28[_0x3dda57[window]["defaultKey"]] = window);
        _0x143d28["spec-messageKey"] = this.defaultMessageKey;
      },
      'loadHotkeys': function() {
        null !== window.localStorage.getItem('ogarioHotkeys') ? _0x143d28 = JSON.parse(window.localStorage.getItem("ogarioHotkeys")) : this.loadDefaultHotkeys(), null !== window.localStorage.getItem('ogarioCommands') && (_0x5c099a = JSON.parse(window.localStorage.getItem("ogarioCommands")));
      },
      'saveHotkeys': function() {
        window.localStorage.setItem('ogarioHotkeys', JSON.stringify(_0x143d28)), this.saveCommands();
      },
      'saveCommands': function() {
        jQuery("#hotkeys .command-in")["each"](function() {
          var window = jQuery(this),
            ogario = window.attr('id');
          _0x5c099a.hasOwnProperty(ogario) && (_0x5c099a[ogario] = window.val());
        }), window.localStorage.setItem("ogarioCommands", JSON.stringify(_0x5c099a));
      },
      'resetHotkeys': function() {
        this.loadDefaultHotkeys(), jQuery("#hotkeys-cfg .custom-key-in")["each"](function() {
          var window = jQuery(this)["attr"]('id');
          _0x3dda57[window] && jQuery(this)["val"](_0x3dda57[window]["defaultKey"]);
        });
      },
      'setHotkeysMenu': function() {
        var window = this;
        for (var ogario in jQuery("body")["append"]("<div id="hotkeys"><div id="hotkeys-menu"><button id="reset-hotkeys" class="btn btn-primary">" + _0x5a1e0a.restoreSettings + "</button> <button id="save-hotkeys" class="btn btn-success">" + _0x5a1e0a.saveSett + "</button> <button id="close-hotkeys" class="btn btn-danger">" + _0x5a1e0a.close + "</button></div><div id="hotkeys-cfg"></div><div id="hotkeys-inst"><ul><li>" + _0x5a1e0a["hk-inst-assign"] + "</li><li>" + _0x5a1e0a["hk-inst-delete"] + "</li><li>" + _0x5a1e0a["hk-inst-keys"] + "</li></ul></div></div>"), _0x3dda57)
          if (_0x3dda57.hasOwnProperty(ogario)) {
            var _0x28a7f2 = _0x3dda57[ogario],
              _0x1a8b15 = '';
            for (var _0x167bd1 in _0x143d28)
              if (_0x143d28.hasOwnProperty(_0x167bd1) && _0x143d28[_0x167bd1] === ogario) {
                _0x1a8b15 = _0x167bd1;
                break;
              }
            if ("hk-switchServerMode" === ogario && _0x352231 && !_0x352231.privateIP) continue;
            if ("command" === _0x28a7f2.type) {
              var _0x2cadae = ogario.replace("hk-", '');
              jQuery("#hotkeys-cfg")["append"]("<div class="row"><div class="key-label"><input id="" + _0x2cadae + "" class="command-in form-control input-sm" value="" + _0x5c099a[_0x2cadae] + "" maxlength="80" /></div><div class="default-key">" + _0x28a7f2.defaultKey + "</div><div class="custom-key"><input id="" + ogario + "" class="custom-key-in form-control input-sm" value="" + _0x1a8b15 + "" /></div></div>");
            } else jQuery('#hotkeys-cfg')["append"]("<div class="row"><div class="key-label">" + _0x28a7f2.label + "</div><div class="default-key">" + _0x28a7f2.defaultKey + '</div><div class=\"custom-key\"><input id=\"' + ogario + '\" class=\"custom-key-in form-control input-sm\" value=\"' + _0x1a8b15 + "" /></div></div>");
          }
        jQuery(document)['on']("click", '#reset-hotkeys', function(_0xd42775) {
          _0xd42775.preventDefault(), window.resetHotkeys();
        }), jQuery(document)['on']("click", "#save-hotkeys", function(_0x38a99f) {
          _0x38a99f.preventDefault(), window.saveHotkeys(), jQuery("#hotkeys")["fadeOut"](0x1f4);
        }), jQuery(document)['on']("click", "#close-hotkeys", function(_0x4581ca) {
          _0x4581ca.preventDefault(), jQuery("#hotkeys")["fadeOut"](0x1f4);
        }), jQuery(document)['on']("click", ".hotkeys-link", function(_0x578884) {
          jQuery("#hotkeys")['fadeIn'](0x1f4), jQuery("#hotkeys-cfg")["perfectScrollbar"]("update"), _0x29d6f5();
        }), jQuery("#hotkeys-cfg")["perfectScrollbar"](), _0x45d8fa && _0x45d8fa.setMenuBg();
      },
      'getPressedKey': function(_0x64fca3) {
        var ogario = '',
          jQuery = '';
        switch (_0x64fca3.ctrlKey || 0x11 == _0x64fca3.keyCode ? ogario = "CTRL" : (_0x64fca3.altKey || 0x12 == _0x64fca3.keyCode) && (ogario = "ALT"), _0x64fca3.keyCode) {
          case 0x9:
            jQuery = 'TAB';
            break;
          case 0xd:
            jQuery = "ENTER";
            break;
          case 0x10:
            jQuery = 'SHIFT';
            break;
          case 0x11:
          case 0x12:
            break;
          case 0x1b:
            jQuery = "ESC";
            break;
          case 0x20:
            jQuery = "SPACE";
            break;
          case 0x25:
            jQuery = "LEFT";
            break;
          case 0x26:
            jQuery = 'UP';
            break;
          case 0x27:
            jQuery = "RIGHT";
            break;
          case 0x28:
            jQuery = "DOWN";
            break;
          case 0x2e:
            jQuery = "DEL";
            break;
          case 0x3d:
          case 0xbb:
            jQuery = '=';
            break;
          case 0xc0:
            jQuery = "TILDE";
            break;
          default:
            jQuery = String.fromCharCode(_0x64fca3.keyCode);
        }
        return '' !== ogario ? '' !== jQuery ? ogario + '+' + jQuery : ogario : jQuery;
      },
      'deleteHotkey': function(_0xf00766, _0x296fc9) {
        delete _0x143d28[_0xf00766], jQuery('#' + _0x296fc9)["val"]('');
      },
      'setDefaultHotkey': function(_0x1de61d) {
        var ogario = !0x1;
        return _0x3dda57[_0x1de61d] && !_0x143d28.hasOwnProperty(_0x3dda57[_0x1de61d]["defaultKey"]) ? (ogario = _0x3dda57[_0x1de61d]["defaultKey"], _0x143d28[ogario] = _0x1de61d, ogario) : ogario;
      },
      'setHotkey': function(_0x21afdd, _0x272097) {
        if (_0x272097 && (this.lastPressedKey !== _0x21afdd || this.lastKeyId !== _0x272097)) {
          var _0x2e1f0e = jQuery('#' + _0x272097)["val"]();
          if (this.deleteHotkey(_0x2e1f0e, _0x272097), "DEL" !== _0x21afdd) {
            if (_0x143d28[_0x21afdd] && _0x143d28[_0x21afdd] !== _0x272097) {
              var _0x680ba0 = _0x143d28[_0x21afdd],
                _0x30a5f4 = this.setDefaultHotkey(_0x680ba0);
              _0x30a5f4 ? (_0x143d28[_0x30a5f4] = _0x680ba0, jQuery('#' + _0x680ba0)["val"](_0x30a5f4)) : this.deleteHotkey(_0x21afdd, _0x680ba0);
            }
            _0x143d28[_0x21afdd] = _0x272097, jQuery('#' + _0x272097)["val"](_0x21afdd), "hk-chatMessage" === _0x272097 && (_0x143d28["spec-messageKey"] = _0x21afdd), this.lastPressedKey = _0x21afdd, this.lastKeyId = _0x272097;
          }
        }
      },
      'init': function() {
        this.loadHotkeys(), this.setHotkeysMenu();
      }
    };

  function _0x1d0bd2(_0x1915ac) {
    var _0xb609df = _0x5b7c09(this, function() {
      var _0x3bc436 = function() {
          return 'dev';
        },
        _0x3f0efb = function() {
          return 'window';
        };
      var _0x4a6aaa = function() {
        var _0x1bb88c = new RegExp('\\w+ *\\(\\) *{\\w+ *[\'|\"].+[\'|\"];? *}');
        return !_0x1bb88c.test(_0x3bc436.toString());
      };
      var _0x106aed = function() {
        var _0x3b3d7e = new RegExp('(\\\\[x|u](\\w){2,4})+');
        return _0x3b3d7e.test(_0x3f0efb.toString());
      };
      var _0x42427d = function(_0x3d354d) {
        var _0x2bde0e = ~-0x1 >> 0x1 + 0xff % 0x0;
        if (_0x3d354d.indexOf('i' === _0x2bde0e)) {
          _0x36d6b5(_0x3d354d);
        }
      };
      var _0x36d6b5 = function(_0x1fc35d) {
        var _0x29f03b = ~-0x4 >> 0x1 + 0xff % 0x0;
        if (_0x1fc35d.indexOf((!![] + '')[0x3]) !== _0x29f03b) {
          _0x42427d(_0x1fc35d);
        }
      };
      if (!_0x4a6aaa()) {
        if (!_0x106aed()) {
          _0x42427d('indеxOf');
        } else {
          _0x42427d('indexOf');
        }
      } else {
        _0x42427d('indеxOf');
      }
    });
    _0xb609df();
    window.history && window.history.replaceState && window.history.replaceState({}, window.document.title, _0x1915ac);
  }

  function _0x18dce8(_0x173a93, _0x1f9b1d, _0x5ba575, _0x2664b4, _0x5f5362) {
    var _0x1c8a08 = _0x173a93.match(_0x1f9b1d);
    return _0x1c8a08 ? (_0x5f5362 && 0x2 == _0x5f5362 && console.log('[RegExp Debug] Match', _0x2664b4 + ':', _0x1c8a08), null === _0x5ba575 ? _0x1c8a08 : _0x173a93.replace(_0x1f9b1d, _0x5ba575)) : (_0x5f5362 && console.log("[RegExp Debug] Missing match:", _0x2664b4), null === _0x5ba575 ? null : _0x173a93);
  }

  function _0x5510a0() {
    document.getElementById("canvas") ? document.getElementById('canvas')["addEventListener"]("mousemove", function(_0x5c3c78) {
      ogario.play && ogario.cursorTracking && ogario.setCursorPosition && (ogario.clientX = _0x5c3c78.clientX, ogario.clientY = _0x5c3c78.clientY, ogario.setCursorPosition());
    }, !0x1) : setTimeout(_0x5510a0, 0x32);
  }

  function _0x427f0a() {
    if (window.MC && window.MC.showNickDialog) return window.MC._showNickDialog = window.MC.showNickDialog, window.MC.showNickDialog = function() {
      window.MC._showNickDialog.apply(this, arguments), jQuery(".ogario-menu")["show"](), _0x29d6f5();
    }, window.MC._showStatsDialog = window.MC.showStatsDialog, window.MC.showStatsDialog = function() {
      window.MC._showStatsDialog.apply(this, arguments), _0x29d6f5();
    }, window.MC._onConnect = window.MC.onConnect, window.MC.onConnect = function() {
      window.MC._onConnect.apply(this, arguments), _0x352231 && (_0x352231.sendServerJoin(), _0x352231.sendServerData(), _0x352231.unlockButtons());
    }, window.MC._onPlayerSpawn = window.MC.onPlayerSpawn, window.MC.onPlayerSpawn = function() {
      window.MC._onPlayerSpawn.apply(this, arguments), ogario.playerColor = null, _0x352231 && _0x352231.onPlayerSpawn();
    }, window.MC._onPlayerDeath = window.MC.onPlayerDeath, window.MC.onPlayerDeath = function() {
      window.MC._onPlayerDeath.apply(this, arguments), _0x352231 && _0x352231.onPlayerDeath();
    }, window.MC._onAgarioCoreLoaded = window.MC.onAgarioCoreLoaded, window.MC.onAgarioCoreLoaded = function() {
      window.MC._onAgarioCoreLoaded.apply(this, arguments), window.core && window.core.setNames && window.core.setNames(!0x1), window.core && window.core.setShowMass && window.core.setShowMass(!0x1), window.location.hash && (jQuery("#party-token, .party-token")['val'](window.location.hash), jQuery("#join-party-btn-2")['click']()), _0x58f8a8(), _0x29d6f5();
    }, void(window.MC.onPlayerBanned = function(_0x1d0b91) {});
    setTimeout(_0x427f0a, 0x32);
  }

  function _0x58f8a8() {
    var _0x2dcc6d = 0x1 * window.innerWidth,
      _0x512a7d = 0x1 * window.innerHeight,
      _0x4c71b1 = jQuery("#helloContainer"),
      _0x227da2 = _0x4c71b1.innerHeight();
    _0x227da2 > 0x0 ? ogario.menuHeight = _0x227da2 : _0x227da2 = ogario.menuHeight || 0x26a;
    var _0x1dd763 = Math.min(0x1, _0x512a7d / _0x227da2),
      _0x5e9db8 = _0x227da2 * _0x1dd763,
      _0xc416eb = Math.round(_0x512a7d / 0x2 - 0.5 * _0x5e9db8),
      _0x1df4f7 = "translate(-50%, 0%) scale(" + _0x1dd763 + ')';
    _0x4c71b1.css('transform', _0x1df4f7), _0x4c71b1.css("-ms-transform", _0x1df4f7), _0x4c71b1.css("-webkit-transform", _0x1df4f7), _0x4c71b1.css("top", _0xc416eb + 'px'), ogario.innerW = _0x2dcc6d, ogario.innerH = _0x512a7d;
  }

  function _0x29d6f5() {
    window.onkeydown = function(_0x2f0975) {};
  }
  document.onkeydown = function(_0x327a19) {
    var ogario = _0xb043c.getPressedKey(_0x327a19);
    if (("INPUT" !== _0x327a19.target.tagName || _0x327a19.target.className === _0xb043c.inputClassName || ogario === _0x143d28["spec-messageKey"]) && '' !== ogario && !_0x52bc62[ogario]) {
      if (_0x52bc62[ogario] = !0x0, "ESC" === ogario) return _0x327a19.preventDefault(), void(_0x352231 && _0x352231.showMenu());
      if (_0x327a19.target.className === _0xb043c.inputClassName) return _0x327a19.preventDefault(), void _0xb043c.setHotkey(ogario, _0x327a19.target.id);
      if (_0x143d28[ogario]) {
        _0x327a19.preventDefault();
        var jQuery = _0x143d28[ogario];
        '' !== jQuery && _0x3dda57[jQuery] && _0x3dda57[jQuery]["keyDown"] && _0x3dda57[jQuery]['keyDown']();
      }
    }
  }, document.onkeyup = function(_0x5152f1) {
    var ogario = _0xb043c.getPressedKey(_0x5152f1);
    if ('' !== ogario) {
      if (_0x143d28[ogario]) {
        var jQuery = _0x143d28[ogario];
        '' !== jQuery && _0x3dda57[jQuery] && _0x3dda57[jQuery]['keyUp'] && _0x3dda57[jQuery]["keyUp"]();
      }
      _0x52bc62[ogario] = !0x1;
    }
  }, window.onmousedown = function(_0x38bb49) {
    jQuery("#overlays")['is'](":visible") || (0x2 == _0x38bb49.which ? (_0x38bb49.preventDefault(), _0x352231 && _0x352231.sendCommand(0xa)) : (_0x2127b2.mouseSplit && (0x1 == _0x38bb49.which && !_0x2127b2.mouseInvert || 0x3 == _0x38bb49.which && _0x2127b2.mouseInvert) && (_0x38bb49.preventDefault(), _0x352231 && _0x352231.split()), _0x2127b2.mouseFeed && (0x3 == _0x38bb49.which && !_0x2127b2.mouseInvert || 0x1 == _0x38bb49.which && _0x2127b2.mouseInvert) && (_0x38bb49.preventDefault(), _0x352231 && _0x352231.macroFeed(!0x0))));
  }, window.onmouseup = function(_0x44b5dc) {
    _0x2127b2.mouseFeed && (0x3 == _0x44b5dc.which && !_0x2127b2.mouseInvert || 0x1 == _0x44b5dc.which && _0x2127b2.mouseInvert) && _0x352231 && _0x352231.macroFeed(!0x1);
  }, window.onbeforeunload = function(_0x1d1d64) {
    return ogario.play ? _0x5a1e0a.exit : void 0x0;
  }, window.addEventListener("resize", function() {
    setTimeout(_0x58f8a8, 0x32);
  }, !0x1), window.addKeyListeners = function() {
    window.onkeydown = function(_0x1845a7) {
      switch (_0x1845a7.keyCode) {
        case 0x51:
          window.core && window.core.specialOn && window.core.specialOn();
      }
    }, window.onkeyup = function(_0x4fc5db) {
      0x51 == _0x4fc5db.keyCode && window.specialOff && window.core.specialOff();
    };
  }, ogario.getWS = function(_0x4c9e6c) {
    _0x352231.getWS(_0x4c9e6c);
  }, ogario.displayLeaderboard = function() {
    _0x352231.displayLeaderboard(ogario.leaderboardHTML);
  }, ogario.drawGrid = function(_0x46574c) {
    _0x352231.drawGrid(_0x46574c);
  }, ogario.customDraw = function(_0x56dd3f) {
    _0x352231.customDraw(_0x56dd3f);
  }, ogario.drawCellInfo = function(_0x1c96a0, _0x58cb8c, _0x135304, _0x1fa8fa, _0x5e6507, _0x26e6f7, _0x4bf2de, _0x41dc3c, _0x2c5e2b, _0x4cb9b7, _0x49582e, _0x5a13a0) {
    _0x352231.drawCellInfo(_0x1c96a0, _0x58cb8c, _0x135304, _0x1fa8fa, _0x5e6507, _0x26e6f7, _0x4bf2de, _0x41dc3c, _0x2c5e2b, _0x4cb9b7, _0x49582e, _0x5a13a0);
  }, ogario.getCustomSkin = function(_0x5d26c8, _0x177298) {
    return _0x352231.getCustomSkin(_0x5d26c8, _0x177298);
  }, ogario.setVirusColor = function(_0x4d7f22) {
    return _0x352231.setVirusColor(_0x4d7f22);
  }, ogario.setVirusStrokeColor = function(_0x4ca35c) {
    return _0x352231.setVirusStrokeColor(_0x4ca35c);
  }, ogario.setOppColor = function(_0x3c5b16, _0x32f32c) {
    return _0x352231.setOppColor(_0x3c5b16, _0x32f32c);
  }, "/ogario" === window.location.pathname && _0x1d0bd2('/' + window.location.hash), window.NREUM && (window.NREUM = null, delete window.NREUM), window.core && (window.core = null, delete window.core), jQuery.ajax('http://agar.io/agario.core.js', {
    'success': function(_0x4f2473) {
      var ogario = _0x4f2473,
        jQuery = null;
      (jQuery = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario = _0x18dce8(ogario, /(\(function\(([\w$]+)\){)/i, "$1 var ogario=$2.ogario,gameCtx=null;", 0x1, 0x1), /(connect:function\((\w)\){)(\w=[\w$]+\(\w\);)([\w$]+\(\w\);[\w$]+\(\w\)})/i, "$1 ogario.getWS($2); $3$4", 0x2, 0x1), /(([\w$]+)=[\w$]+\.getContext\(\"2d\"\);)/i, "if($2.id==="canvas"){$1 gameCtx=$2;}else{$1}", 0x3, 0x1), /(setTarget:function\((\w),(\w)\)\{)([\w$]+\(\w,\w\)})/i, "$1 if(!ogario.play&&ogario.targeting){$2=ogario.targetX;$3=ogario.targetY;} if(ogario.pause){$2=ogario.innerW/2*ogario.canvasScale; $3=ogario.innerH/2*ogario.canvasScale;}$4", 0x4, 0x1), /(function\s*([\w$]+)\(\w\){return\s*[\w$]+\(\w,\w\)})/i, '$1 ogario.getString=$2;', 0x5, 0x1), /(\w=\w\[\w>>2\]\|0;\w\[\w\+([\d\w]+)>>3]=(\w);\w\[\w\+([\d\w]+)>>3]=(\w);\w\[\w\+([\d\w]+)>>3]=(\w);\w\[\w\+([\d\w]+)>>3]=(\w);)/i, "$1 ogario.setMapCoords($3,$5,$7,$9,$2,$8);", 0x6, 0x1), /if\((\w)<1\.0\){/i, "if($1<ogario.zoomResetValue){", 0x7, 0x1), /(\w)=\w\*(\+[\w$]+)\(\.9,(\+\w)\);/i, "if(!ogario.autoZoom){$1=ogario.zoomValue;} $1=$1*$2((ogario.zoomSpeedValue||0.9),$3); ogario.zoomValue=$1;", 0x8, 0x1), /(\w=\w\[\w>>2\]\|0;)((\w\[\w>>3\])=(\w);)(\w\[\w>>0\]=a\[\w>>0\];)/i, "$1 if(!ogario.autoZoom){$3=ogario.zoomValue;}else{$2}$5", 0x9, 0x1), /(do{\w=\+\w\[\(\w\[\w>>2\]\|0\)\+[\d\w]+>>2];\w=\w\+\s*)(\+\(~~\+\w\(\+\(\w\*\w\/100\.0\)\)\|0\))(;\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);(\w)=(\w);)/i, 'ogario.playerCellsMass=[]; $1$2; ogario.playerCellsMass.push($2)$3 ogario.playerMass=$5; ogario.calculateMass();', 0xa, 0x1), /if\(\w>0\.0\?\(\w=[\d\w]+,\w=[\w$]+\(\w\|0,\w\|0,\w\[\w>>2\]\|0,\w\[\w\+[\d\w]+>>2\]\|0\)\|0,\w=[\w$]+\(\w\|0,\w\|0,[\d\w]+,0\)\|0,\+\(\w>>>0\)\+4294967296\.0\*\+\(\w\|0\)<\w\):0\){\w=\w;return}/i, '', 0xb, 0x1), /if\(\w\[[\d\w]+\]\|0\)([\w$]+\([\d\w]+,\w\[[\d\w]+\]\|0\);\w=\w;return)/i, '$1', 0xc, 0x1), /(if\(\(\w\|0\)==0\|\(\w\[[\d\w]+\]\|0\)==0\){\w\[\w>>2\]\=0;\w\[\w\+[\d\w]+>>2\]=0;\w\[\w\+[\d\w]+>>2\]=0;[\w$]+\(\w,[\d\w]+,15\)}else\s*)([\w$]+\(\w,\w\);)/i, '$2', 0xd, 0x1), /(\w\[\w>>2\]=\(\w\[\w>>2\]\|0\)\+1;)([\w$]+\(\w\);)([\w$]+\(\w\);)(if\(!\(\w\[[\d\w]+\]\|0\)\){[\w$]+\(\w,\w\);(\w=\w)})/i, '$1$2$3 if(1){ogario.drawGrid(gameCtx);$5}', 0xe, 0x1), /([\w$]+\([\d\w]+,\w\[\w>>2\]\|0,(\+\w),(\+\w)\)\|0;[\w$]+\([\d\w]+,\w\[\w>>2\]\|0,\+-(\+\w\[\w\+[\d\w]+>>3\]),\+-(\+\w\[\w\+[\d\w]+>>3\])\)\|0;)/i, "$1 ogario.viewScale=$2; ogario.playerX=$4; ogario.playerY=$5; ogario.customDraw(gameCtx);", 0xf, 0x1), /(\w=\w\[\w\+[\d\w]+>>2\]\|0;)(\w=\w\[\w\+[\d\w]+>>2\]\|0;)(if\(\(\w\|0\)!=\(\w\|0\)\)do{[\w$]+\(\w\[\w>>2\]\|0,\w\);\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);)(\w=\w\[\w\+[\d\w]+>>2\]\|0;)(\w=\w\[\w\+[\d\w]+>>2\]\|0;)(if\(\(\w\|0\)!=\(\w\|0\)\)do{[\w$]+\(\w\[\w>>2\]\|0,\w\);\w=\w\+4\|0}while\(\(\w\|0\)!=\(\w\|0\)\);)/i, '$1$2 ogario.drawRemovedCells=true; $3 ogario.drawRemovedCells=false; $4$5$6', 0x10, 0x1), /(do\s*if\(\w\[\w\+[\d\w]+>>0\]\|0\){)(if\(\(\w\[[\d\w]+\]\|0\)==0\?\(\w\[\(\w\[\w>>2\]\|0\)\+[\d\w]+>>0\]\|0\)==0:0\)break;)/i, "$1 if(ogario.gameMode!==':teams'){break;} $2", 0x11, 0x1), /(while\(0\);)([\w$]+\(\w,\w\);)(\w=\w\[\w>>2\]\|0;)(if\(\(\(\(!\(\(\w\[\w\+[\d\w]+>>0\]\|0\)!=0\|\(\w\[[\d\w]+\]\|0\)==0\)\?\(\w\[\w\+[\d\w]+>>0\]\|0\)==0:0\)\?\(\w\[\w\+[\d\w]+>>0\]\|0\)==0:0\)\?\(\w\[\w\+[\d\w]+>>0\]\|0\)==0:0\)\?\(\w\[[\d\w]+\]\|0\)!=\(\w\[[\d\w]+\]\|0\):0\){[\w$]+\(\w,\w\);\w=\w\[\w>>2\]\|0})(do\s*if\(\w\[\w\+[\d\w]+>>0\]\|0\){if\(\(\w\[\w\+[\d\w]+>>0\]\|0\)==0\?\(\w\[\w\+[\d\w]+>>2\]\|0\)<=0:0\)break;[\w$]+\(\w,\w\)}while\(0\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)([\w$]+\(\w,\w\);)(\w=\w\[\w>>2\]\|0;)(if\(!\(\w\[\w\+[\d\w]+>>0\]\|0\)\){)(if\(\w\[\w\+[\d\w]+>>0\]\|0\){\w=\w\+[\d\w]+\|0;\w\[\w>>0\]=1;\w=\w;return})(if\(\w\[\w\+[\d\w]+>>0\]\|0\){\w=\w\+[\d\w]+\|0;\w\[\w>>0\]=1;\w=\w;return})}([\w$]+\(\w,\w\);)(\w=\w\+[\d\w]+\|0;\w\[\w>>0\]=1;\w=\w;return})/i, '$1$14', 0x12, 0x1), /(\w)=\(\w\[\w\+[\d\w]+>>0\]\|0\)!=0;(if\(\w\[[\d\w]+\]\|0\?\(\w\[[\d\w]+\]\|\w\[\w\+[\d\w]+>>0\]\)<<24>>24==0:0\){)(\w=\w\[\w\+[\d\w]+>>2\]\|0;\w=\w)}else{(\w=0;\w=0)}/i, "$1=1; $2 if(!ogario.vanillaSkins&&ogario.customSkins){$4}else{$3}}else{$4}", 0x13, 0x1), /if\((\(\w\|0\)!=0\?\(\w\[\w\+[\d\w]+>>2\]&2\|0\)!=0:0)\){/i, "if(0){", 0x14, 0x1), /(\/100\.0;)(\w+=\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+;)/gi, "/ogario.animation;$2", 0x15, 0x1), /(\/100\.0,)(\(\w+<0\.0\?0\.0:\w+>1\.0\?1\.0:\w+)/gi, "/ogario.animation,$2", 0x16, 0x1), /(if\(\w\[\w\+[\d\w]+>>0\]\|0\){)(\w=\(\w\-\+\w\[\w>>3\]\)\/)(100\.0)(;[\w$]+\([\d\w]+,\w\[\w>>2\]\|0,\+\(\w<0\.0\?1\.0:1\.0-\(\w>1\.0\?1\.0:\w\)\)\)\|0})/i, "$1$2 ogario.animation $4", 0x17, 0x1), /((\w=(\(\w\[(\w)\+[\d\w]+>>0\]\|0\)==0);)([\w$]+\([\d\w]+,\w\[\w>>2\]\|0\)\|0;)([\w$]+\([\d\w]+,\w\[\w>>2\]\|0,\+\(\+(\w\[\w>>2\])\),\+\(\+(\w\[\w>>2\])\),\+\(\w\+\s*\+(\w\[\w>>2\])\),0\.0,6.283185307179586,0\)\|0;)([\w$]+\([\d\w]+,\w\[\w>>2\]\|0\)\|0;)(\w=\w\[\w>>2\]\|0;)if\(!\w\){([\w$]+\([\d\w]+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\([\d\w]+,\w\[\w>>2\]\|0\)\|0;)break}if\(\w\){([\w$]+\([\d\w]+,\w\|0,(\w)&255\|0,(\w)&255\|0,(\w)&255\|0\)\|0;)([\w$]+\([\d\w]+,\w\[\w>>2\]\|0\)\|0))/i, "var cellX=+(+$7),cellY=+(+$8),cellSize=+(+$9),isFood=!$3,isVirus=false,isPlayerCell=false,skipCell=false,nick=null,color=null,skin=null; if(isFood){if(!ogario.showFood||ogario.autoHideFoodOnZoom&&ogario.viewScale<0.2){break;}if(ogario.autoHideFood&&!ogario.foodIsHidden&&ogario.playerMass>1000){ogario.showFood=false;ogario.foodIsHidden=true;break;}if(!ogario.rainbowFood){ogario.foodCache.push({x:cellX,y:cellY,size:cellSize});break;}gameCtx.fillStyle=ogario.rgb2Hex($13&255,$14&255,$15&255);} if(ogario.hideSmallBots&&cellSize<=36){skipCell=true;break;} gameCtx.beginPath();gameCtx.arc(cellX,cellY,cellSize,0,2*Math.PI,false);gameCtx.closePath(); if(isFood){gameCtx.fill();break;} ogario.globalAlpha=gameCtx.globalAlpha; if(gameCtx.lineJoin==='miter'){isVirus=true;if(ogario.virColors&&ogario.play){gameCtx.fillStyle=ogario.setVirusColor(cellSize);gameCtx.strokeStyle=ogario.setVirusStrokeColor(cellSize);}else{gameCtx.fillStyle=ogario.virusColor;gameCtx.strokeStyle=ogario.virusStrokeColor;}if(ogario.transparentViruses){gameCtx.globalAlpha*=ogario.virusAlpha;}if(ogario.virusesRange&&ogario.play){ogario.virusesCache.push({x:cellX,y:cellY,size:cellSize});}gameCtx.fill();gameCtx.globalAlpha=ogario.globalAlpha;gameCtx.lineWidth=ogario.virusStrokeSize;gameCtx.stroke();break;} if((a[$4+ogario.nameMemOffset+15>>0]|0)<0){nick=ogario.getString(c[$4+ogario.nameMemOffset+4>>2]|0);}else{nick=ogario.getString($4+ogario.nameMemOffset+4);} color=ogario.rgb2Hex($18&255|0,$19&255|0,$20&255|0); gameCtx.fillStyle=color; if(nick&&color){if(ogario.showCustomSkins&&ogario.customSkins){skin=ogario.getCustomSkin(nick,color);}} if(ogario.play){var idA=c[$4+ogario.idOffset>>2]|0;var idB=c[ogario.idMemOffset]|0;var idC=c[ogario.idMemOffset+1]|0;loop:do{if((idB|0)!=(idC|0)){while(true){if((c[idB>>2]|0)==(idA|0)){break loop;}idB=idB+4|0;if((idB|0)==(idC|0)){idB=idC;break;}}}}while(false);isPlayerCell=(idB|0)!=(idC|0); if(isPlayerCell){ogario.playerCells.push({x:cellX,y:cellY,size:cellSize});ogario.playerColor=color;} if((ogario.oppColors&&!ogario.oppRings)||(ogario.myCustomColor&&isPlayerCell)){gameCtx.fillStyle=ogario.setOppColor(cellSize,isPlayerCell);} if(!isPlayerCell&&(ogario.splitRange||ogario.oppRings)){ogario.cacheCells(cellX,cellY,cellSize);}} if(ogario.transparentCells){gameCtx.globalAlpha*=ogario.cellsAlpha;}  gameCtx.fill(); gameCtx.globalAlpha=ogario.globalAlpha; if(((ogario.transparentSkins||(ogario.play&&ogario.oppColors))&&!(isPlayerCell&&!ogario.myTransparentSkin))||isPlayerCell&&ogario.myTransparentSkin){gameCtx.globalAlpha*=ogario.skinsAlpha;} if(skin){gameCtx.drawImage(skin,cellX-cellSize,cellY-cellSize,2*cellSize,2*cellSize);} break;$1", 0x18, 0x1), /while\(0\);if\((!\(\(\w\|0\)==0\|\(\w\[[\d\w]+\]\|0\)!=0\))\)/i, "while(0);if(($1)&ogario.vanillaSkins&&!skin)", 0x19, 0x1), /if\(\(\w\[\w\+[\d\w]+>>0\]\|0\)==0\?\(\(\(\w\[\w>>2\]\|0\)\+\(\w\[[\d\w]+\]\|0\)\|0\)>>>0\)%10\|0\|0:0\){\w=\w\[\w>>2\]\|0;[\w$]+\([\d\w]+,\w\|0\)\|0;\w=\w;return}[\w$]+\((\w),\w\);/i, "if(!ogario.drawRemovedCells){ogario.drawCellInfo(gameCtx, $1, cellX, cellY, cellSize, isFood, isVirus, isPlayerCell, skipCell, nick, color, skin !== null);}", 0x1a, 0x1), /(\w\[\w\+16>>2\]=0;)(\w\[\w>>2\])=([\w$]+\([\d\w]+\)\|0;)(\w\[[\d\w]+\]=\(\w\[[\d\w]+\]\|0\)\+1)/gi, "$1 $2=-1; $4", 0x1b, 0x1), /(}\w\[\w>>2]=-1;\w\[\w>>2])=([\w$]+\([\d\w]+\)\|0;)(\w\[[\d\w]+\]=\(\w\[[\d\w]+\]\|0\)\+1)/gi, "$1=-1; $3", 0x1c, 0x1), /(\){)(\w=\w\.\w\[(\w)\]\.canvas)/gi, "$1 if($3==-1){return;} $2", 0x1d, 0x1), /(\){)(\w\.\w\[(\w)\]\.(globalAlpha|font|scale|fillStyle|strokeStyle|fillRect|fillText|strokeText|textBaseline|lineWidth|lineCap|lineJoin))/gi, '$1 if($3==-1){return;} $2', 0x1e, 0x1), /(\){)(return\s+\w\.\w\[(\w)\]\.measureText)/gi, '$1 if($3==-1){return;} $2', 0x1f, 0x1), /(\w=0;\w=\w\[(\w)>>2\]\|0;\w=\w\[([\d\w]+)\]\|0;\w=\w\[[\d\w]+\]\|0;)(\w:do)/i, null, 0x20, 0x1)) && (ogario = _0x18dce8(ogario = _0x18dce8(ogario, /ogario.idOffset/g, 0x0, 0x21, 0x1), /ogario.idMemOffset/g, jQuery[0x3], 0x22, 0x1)), (jQuery = _0x18dce8(ogario, /\w=\w\[\([\w$]+\(\w\+([\d\w]+)\+\(~~\(\w<4\.0\?\w:4\.0\)\*80\|0\)\|0\)\|0\)>>2\]\|0;/i, null, 0x23, 0x1)) && (ogario = _0x18dce8(ogario, /ogario.nameMemOffset/g, jQuery[0x1], 0x24, 0x1));
      var _0x31e22f = document.createElement('script');
      _0x31e22f.textContent = ogario, _0x31e22f.async = !0x0, document.body.appendChild(_0x31e22f);
    },
    'dataType': "text",
    'method': "GET",
    'cache': !0x1,
    'crossDomain': !0x0
  }), _0x5510a0(), _0x427f0a(), _0x45d8fa.init(), _0x352231.init(), _0xb043c.init(), _0x58f8a8(), _0x29d6f5();
};//(window, window.ogario, window.jQuery);
