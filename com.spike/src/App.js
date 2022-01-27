/*
 * If not stated otherwise in this file or this component's LICENSE file the
 * following copyright and licenses apply:
 *
 * Copyright 2020 Metrological
 *
 * Licensed under the Apache License, Version 2.0 (the License);
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { Lightning, Utils } from '@lightningjs/sdk'
import Carousel from './Carousel'
import { Button, Row } from '@lightningjs/ui-components'

export default class App extends Lightning.Component {
  static _template() {
    const buttonProps = {
      h: 100,
      w: 100,
    }
    return {
      Background: {
        w: 1920,
        h: 1080,
        type: Lightning.Texture.ImageTexture,
        src: '../static/images/background.png',
      },
      Carousel: {
        type: Carousel,
        y: 100,
        items: [
          { type: Button, title: '1', ...buttonProps },
          { type: Button, title: '2', ...buttonProps },
          { type: Button, title: '3', ...buttonProps },
          { type: Button, title: '4', ...buttonProps },
          { type: Button, title: '5', ...buttonProps },
          { type: Button, title: '6', ...buttonProps },
          { type: Button, title: '7', ...buttonProps },
          { type: Button, title: '8', ...buttonProps },
          { type: Button, title: '9', ...buttonProps },
          { type: Button, title: '10', ...buttonProps },
          { type: Button, title: '11', ...buttonProps },
          { type: Button, title: '12', ...buttonProps },
          { type: Button, title: '13', ...buttonProps },
          { type: Button, title: '14', ...buttonProps },
          { type: Button, title: '15', ...buttonProps },
        ],
        itemSpacing: 50,
      },
      Basic: {
        type: Row,
        y: 300,
        items: [
          { type: Button, title: '1', ...buttonProps },
          { type: Button, title: '2', ...buttonProps },
          { type: Button, title: '3', ...buttonProps },
          { type: Button, title: '4', ...buttonProps },
          { type: Button, title: '5', ...buttonProps },
          { type: Button, title: '6', ...buttonProps },
          { type: Button, title: '7', ...buttonProps },
          { type: Button, title: '8', ...buttonProps },
          { type: Button, title: '9', ...buttonProps },
          { type: Button, title: '10', ...buttonProps },
          { type: Button, title: '11', ...buttonProps },
          { type: Button, title: '12', ...buttonProps },
          { type: Button, title: '13', ...buttonProps },
          { type: Button, title: '14', ...buttonProps },
          { type: Button, title: '15', ...buttonProps },
        ],
        itemSpacing: 50,
      },
    }
  }
  static _states() {
    return [
      class Carousel extends this {
        _getFocused() {
          return this.tag('Carousel')
        }
      },
      class Basic extends this {
        _getFocused() {
          return this.tag('Basic')
        }
      },
    ]
  }

  _init() {
    this._setState('Carousel')
  }

  _handleDown() {
    this._setState('Basic')
  }
  _handleUp() {
    this._setState('Carousel')
  }
}
