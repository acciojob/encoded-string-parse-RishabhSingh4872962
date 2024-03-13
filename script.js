const parseCode = (strr) => {
  // your code here
	let obj={ 
	}
	let indx=0; 
	 strr.split("0").forEach((str)=>{
		if (str.length>0) {
			if (indx==0) {
				obj.firstName=str;
			}else if (indx==1) {
				obj.lastName=str;
			}else{
								obj.id=str;
			}
			indx++;
		}
	})
	return obj;
};


// Do not change the code below
const str = prompt("Enter str: ");
alert(JSON.stringify(parseCode(str)));
