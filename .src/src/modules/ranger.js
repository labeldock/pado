import { limitOf } from "../functions/nice";
import { isNumber, isAbsoluteNaN } from "../functions/isLike";

export const Limitter = function(max,min){
  this.value = 0;
  if(typeof max !== "number" || isAbsoluteNaN(min)){
    this.maximum = Number.POSITIVE_INFINITY;
  } else {
    this.maximum = max;
  }
  if(typeof min !== "number" || isAbsoluteNaN(min)){
    this.minimum = 0;
  } else {
    this.minimum = min;
  }
};

const LimitterPrototype = {
  expectIn (setValue){
    return setValue === limitOf(setValue,this.maximum,this.minimum);
  },
  expectOut(setValue){
    return setValue !== limitOf(setValue,this.maximum,this.minimum);
  },
  addExpectIn:function(addValue){
    const destValue = this.value + addValue;
    return destValue === limitOf(destValue,this.maximum,this.minimum);
  },
  addExpectOut:function(addValue){
    const destValue = this.value + addValue;
    return destValue !== limitOf(destValue,this.maximum,this.minimum);
  },
  set:function(setValue){
    this.value = setValue;
  },
  add:function(addValue){
    this.value = this.value + addValue;
    return this;
  }
};

Object.defineProperties(LimitterPrototype,{
  done:{
    get (){
      return this.value === limitOf(this.value,this.maximum,this.minimum);
    }
  }
});

Limitter.prototype = LimitterPrototype;

export const ranger = function(max,min){
  return new Limitter(max,min);
};