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

parseCode("John000Doe000123");
// returns { firstName: "John", lastName: "Doe", id: "123" }

parseCode("michael0smith004331");
// returns { firstName: "michael", lastName: "smith", id: "4331" }

parseCode("Thomas00LEE0000043");    
// returns { firstName: "Thomas", lastName: "LEE", id: "43" }
// Do not change the code below
// const str = prompt("Enter str: ");
// alert(JSON.stringify(parseCode(str)));
