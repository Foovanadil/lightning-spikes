import { Row } from '@lightningjs/ui-components'

export default class Carousel extends Row {
  set items(items) {
    super.items = items
    // this.Items.childList.addAt(items[items.length - 1], 0) // HACKS
    // this.Items.childList.addAt(items[0], items.length - 1)
  }
  get items() {
    return super.items
  }

  selectPrevious() {
    const startingIndex = this.selectedIndex
    super.selectPrevious()
    this._carouselItems(this.Items.children.length - 1, 0, startingIndex)
    return true
  }

  selectNext() {
    const startingIndex = this.selectedIndex
    super.selectNext()
    this._carouselItems(0, this.Items.children.length - 1, startingIndex)
    return true
  }

  _carouselItems(removeIndex, addIndex, startingIndex) {
    const child = this.Items.childList.getAt(removeIndex)
    // child.alpha = 0
    this.Items.childList.removeAt(removeIndex)
    this.Items.childList.addAt(child, addIndex)
    //    this._updateLayout()
    this.selectedIndex = startingIndex

    // const childXTransition = child.transition('x')
    // childXTransition.on(
    //   'finish',
    //   this.updateLogic.call(this, removeIndex, addIndex, startingIndex, child)
    // )
  }

  // updateLogic(removeIndex, addIndex, startingIndex, child) {
  //   // shift children and update layout
  //   console.log('in update')
  //   //child.alpha = 0
  //   this.Items.childList.removeAt(removeIndex)
  //   this.Items.childList.addAt(child, addIndex)
  //   // this._updateLayout()
  //   this.selectedIndex = startingIndex
  //   //console.log(this.selectedIndex)
  //   //this.Items.childList.removeAt(removeIndex)
  //   const childXTransition = child.transition('x')
  //   childXTransition.off('finish', this.updateLogic)
  //   this._shiftChild(child, childXTransition)
  // }
}
