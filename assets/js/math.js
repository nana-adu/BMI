
// Male BMI calculations
	// get data for height and weight for male

	function getMaleHeight() {
		var getMHeight = document.getElementById("mheight").value;
		return getMHeight;
	}

	function getMaleWeight() {
		var getMWeight =  document.getElementById("mweight").value;
		return getMWeight;
	}

		// calculate BMI

	function calcMale() {
		var male_height = getMaleHeight() * getMaleHeight();
		var maleResult = ((getMaleWeight()/ male_height )* 10000);
		return maleResult;
	}	

		// display results into textbox
	function displayMaleResults() {
		
		if(calcMale() < 18.5) {
			document.getElementById("mtextview").value = "Under Weight: BMI is" + " " +calcMale().toFixed(1);
		}

		else if(calcMale() < 25) {
			document.getElementById("mtextview").value = "Normal Weight: BMI is" + " " +calcMale().toFixed(1);
		}
		else if(calcMale() < 30) {
			document.getElementById("mtextview").value = "Over Weight: BMI is" + " " +calcMale().toFixed(1);
		}
		else {
			document.getElementById("mtextview").value = "Obese: BMI is" + " " +calcMale().toFixed(1);
		}
	}


// Female BMI calculation
		// get data for height and weight for female

	function getFemaleHeight() {
		var getFHeight = document.getElementById("fheight").value;
		return getFHeight;
	}

	function getFemaleWeight() {
		var getFWeight =  document.getElementById("fweight").value;
		return getFWeight;
	}

		// calculate BMI

	function calcFemale() {
		var female_height = getFemaleHeight() * getFemaleHeight();
		var femaleResult = ((getFemaleWeight()/ female_height )* 10000);
		return femaleResult;
	}	

		// display results into textbox
	function displayFemaleResults() {
		
		if(calcFemale() < 18.5) {
			document.getElementById("ftextview").value = "Under Weight: BMI is" + " " +calcFemale().toFixed(1);
		}

		else if(calcFemale() < 25) {
			document.getElementById("ftextview").value = "Normal Weight: BMI is" + " " +calcFemale().toFixed(1);
		}
		else if(calcFemale() < 30) {
			document.getElementById("ftextview").value = "Over Weight: BMI is" + " " +calcFemale().toFixed(1);
		}
		else {
			document.getElementById("ftextview").value = "Obese: BMI is" + " " +calcFemale().toFixed(1);
		}
	}	