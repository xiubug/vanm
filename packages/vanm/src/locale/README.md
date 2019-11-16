# Internationalization

### Intro

The default language of Vanm is Chinese. If you want to use other languages, you can follow the instructions below.

### Switch languages

Vanm supports multiple languages with the Locale component, and the `Locale.use` method allows you to switch to different languages.

```js
import { Locale } from 'vanm';
import enUS from 'vanm/lib/locale/lang/en-US';

Locale.use('en-US', enUS);
```

### Modify default configs

Use `Locale.add` method to modify the default configs.

```js
import { Locale } from 'vanm';

const messages = {
  'en-US': {
    vanPicker: {
      confirm: 'Close'
    }
  }
};

Locale.add(messages);
```

### Config files

Current supported languages:

| Language | Filename |
|------|------|
| Chinese | zh-CN |
| Traditional Chinese (HK) | zh-HK |
| Traditional Chinese (TW) | zh-TW |
| English | en-US |
| Turkish | tr-TR |
| Spanish (Spain) | es-ES |

> View all language configs [Here](https://github.com/sosout/vanm/tree/dev/src/locale/lang).
