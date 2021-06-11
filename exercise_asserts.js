// Flag, set to 1 or 0 to display ASSERT results
var AssertionTESTdebug=1;
var AssertionTEST='';

class TESTAssertion {
	static assertionMessages=[];
	constructor() {
	}

	static TESTgetJSLineNumber() {
		try {
			createERROR;
		}
		catch(ERROR) {
			let ERRORstack=ERROR.stack.toString();
			let ERRORstackARR=ERRORstack.split(':');
			let ERROR_LINENUMBER=ERRORstackARR[ERRORstackARR.length-2];
			return ERROR_LINENUMBER;
		}
	}

	static TESTassert(condition,message) {
		if (condition==false) {
			return 'Assertion Line:'+TESTAssertion.TESTgetJSLineNumber()+' FAILED. '+message;
		}
		else if (condition==true) {
			return 'Assertion Line:'+TESTAssertion.TESTgetJSLineNumber()+' passed. '+message;
		}
		else {
			return 'Assertion Line:'+TESTAssertion.TESTgetJSLineNumber()+' was not false or true. '+message;
		}
	}

	static TESTaddAssertionMessagesToDOM(container) {
		let assertionMessagesLen=TESTAssertion.assertionMessages.length;
		let data='';
		for (let i=0; i<assertionMessagesLen; i++) {
            if (i!=0) {data+='<br>';}
			data+=TESTAssertion.assertionMessages[i];
		}
		let domnode=document.getElementById(container);
		domnode.innerHTML=data;
        TESTAssertion.assertionMessages=[];
		return true;
	}

	static TESTnumbers0to9(data) {
		let validChars='0-9';
		let negationWrapperLeft='[^';
		let negationWrapperRight=']';
		let dataIsInvalid=new RegExp(negationWrapperLeft+
								validChars+
								negationWrapperRight,
								'i');
		let validateResult=dataIsInvalid.test(data);
		let dataisValid=false;
		if (validateResult===true) {
			dataisValid=false;
		}
		else {
			dataisValid=true;
		}
		return dataisValid;
	}

	static TESTatleast1character(data) {
		if (data.toString().length>=1) { 
			return true;
		}
		else {
			return false;
		}
	}

	static TESTisArray(data) {
		if (Array.isArray(data)==true) {
			return true;
		}
		else {
			return false;
		}
	}

	static TESTareAllArrayValuesNumbers0to9(data) {
        let all=data.join('');
		if (TESTAssertion.TESTnumbers0to9(all)==true) {
			return true;
		}
		else {
			return false;
		}
	}

    static TESTisValidKeyboardCharacters(data) {
        //validChars = a-z A-Z 0-9
        //             @ - . !
        //             " # $ %
        //             & ' ( )
        //             * + , /
        //             : ; < =
        //             > ? [ \
        //             ] | } ~ space
        let validChars='a-zA-Z0-9';
        // Note: \\ encodes - to inform regex there is no range intended
        validChars+="\u0040" + "\\\u002d" + "\u002e" + "\u0021";
        validChars+="\u0022" + "\u0023" + "\u0024" + "\u0025";
        validChars+="\u0026" + "\u0027" + "\u002b" + "\u0028";
        validChars+="\u0029" + "\u002a" + "\u002c" + "\u002f";
        validChars+="\u003a" + "\u003b" + "\u003c" + "\u003d";
        validChars+="\u003e" + "\u003f" + "\u005b" + "\u005c";
        validChars+="\u005d" + "\u007c" + "\u007d" + "\u007e" + "\u0020";
		let negationWrapperLeft='[^';
		let negationWrapperRight=']';
		let dataIsInvalid=new RegExp(negationWrapperLeft+
								validChars+
								negationWrapperRight,
								'i');
		let validateResult=dataIsInvalid.test(data);
		let dataisValid=false;
		if (validateResult===true) {
			dataisValid=false;
		}
		else {
			dataisValid=true;
		}
		return dataisValid;
	}

	static TEST_above_or_below1(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTnumbers0to9(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, number - valid chars 0-9');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTatleast1character(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, number - at least 1 char');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}

	static TEST_above_or_below2(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTisArray(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, items_arr - is an array');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTareAllArrayValuesNumbers0to9(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, items_arr - valid chars 0-9');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}

	static TEST_above_or_below3(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTnumbers0to9(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, count_above - valid chars 0-9');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTatleast1character(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, count_above - at least 1 char');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}

	static TEST_above_or_below4(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTnumbers0to9(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, count_below - valid chars 0-9');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTatleast1character(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: above_or_below, count_below - at least 1 char');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}

	static TEST_rotate_data1(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTnumbers0to9(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: rotate_data, shift_number - valid chars 0-9');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTatleast1character(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: rotate_data, shift_number - at least 1 char');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}

	static TEST_rotate_data2(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTisValidKeyboardCharacters(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: rotate_data, data_to_shift - valid keyboard chars including space');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTatleast1character(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: rotate_data, data_to_shift - at least 1 char');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}

	static TEST_rotate_data3(val) {
		let TEST_ASSERT='';
		TEST_ASSERT=TESTAssertion.TESTisValidKeyboardCharacters(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: rotate_data, shifted_data - valid keyboard chars including space');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
		TEST_ASSERT=TESTAssertion.TESTatleast1character(val);
		TEST_ASSERT=TESTAssertion.TESTassert(TEST_ASSERT,'Validation: rotate_data, shifted_data - at least 1 char');
		TESTAssertion.assertionMessages.push(TEST_ASSERT);
        return true;
	}
}

// Exercise #1
// Make ASSERTion JS template literals
AssertionTEST='TESTAssertion.TEST_above_or_below1(num)';
let AssertionTEST_above_or_below1=`if (AssertionTESTdebug==1) {TEST=new Function('num','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(num);};`;

AssertionTEST='TESTAssertion.TEST_above_or_below2(items)';
let AssertionTEST_above_or_below2=`if (AssertionTESTdebug==1) {TEST=new Function('items','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(items);};`;

AssertionTEST='TESTAssertion.TEST_above_or_below3(count_above)';
let AssertionTEST_above_or_below3=`if (AssertionTESTdebug==1) {TEST=new Function('count_above','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(count_above);};`;

AssertionTEST='TESTAssertion.TEST_above_or_below4(count_below)';
let AssertionTEST_above_or_below4=`if (AssertionTESTdebug==1) {TEST=new Function('count_below','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(count_below);};`;


// Exercise #2
// Make ASSERTion JS template literals
AssertionTEST='TESTAssertion.TEST_rotate_data1(shift_number)';
let AssertionTEST_rotate_data1=`if (AssertionTESTdebug==1) {TEST=new Function('shift_number','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(shift_number);};`;

AssertionTEST='TESTAssertion.TEST_rotate_data2(data_to_shift)';
let AssertionTEST_rotate_data2=`if (AssertionTESTdebug==1) {TEST=new Function('data_to_shift','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(data_to_shift);};`;

AssertionTEST='TESTAssertion.TEST_rotate_data3(shifted_data)';
let AssertionTEST_rotate_data3=`if (AssertionTESTdebug==1) {TEST=new Function('shifted_data','"use strict"; '+'return ('+\`${AssertionTEST}\`+');')(shifted_data);};`;

