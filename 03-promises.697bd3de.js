document.querySelector(".form").addEventListener("submit",(function(e){var n=function(e){setTimeout((function(){Math.random(),new Promise(resolve,reject)}),t+(e-1)*c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))}))};e.preventDefault();for(var o=e.currentTarget.elements,t=o.delay,c=o.step,r=o.amount,a=1;a<=r;a++)n(a)}));
//# sourceMappingURL=03-promises.697bd3de.js.map
