/**
 * Created by bluejoe on 2018/2/6.
 */
///////////////////////////////////
class Utils {
    static mapValues(map) {
        var arr = [];
        for (let v in map.values()) {
            arr.push(v);
        }
        return arr;
    }
    static mergeProperties(objectThis, objectThat) {
        for (let key in objectThat) {
            objectThis[key] = objectThat[key];
        }
    }
}
exports.Utils = Utils;
//////////////Point/////////////////
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    delta(delta) {
        this.x += delta.x;
        this.y += delta.y;
    }
    expand(width, height) {
        return new Rect(this.x - width / 2, this.y - height / 2, this.x + width / 2, this.y + height / 2);
    }
}
exports.Point = Point;
//////////////Rect/////////////////
class Rect {
    constructor(x1, y1, x2, y2) {
        this.x1 = Math.min(x1, x2);
        this.y1 = Math.min(y1, y2);
        this.x2 = Math.max(x1, x2);
        this.y2 = Math.max(y1, y2);
    }
    center() {
        return new Point((this.x1 + this.x2) / 2, (this.y1 + this.y2) / 2);
    }
    width() {
        return this.x2 - this.x1;
    }
    height() {
        return this.y2 - this.y1;
    }
}
exports.Rect = Rect;