<!--
/////////////////////////////////////////////////////////////////////
//         string.js                                               //
//                                                                 //
//         isFieldBlank()                                          //
//         isNumeric()                                             //
//         isDigit()                                               //
//         token()                                                 //
//         removeSpace()                                           //
//         changeSpace()                                           //
//         xReplace()                                              //
/////////////////////////////////////////////////////////////////////


/********************************************************************
*  Function Name : isFieldBlank()                                   *
*  Description   : input Data에 대해 Null Check                     *
*  Input Data    : theField                                         *
*  Output Data   : true/false (Null -> true, notNull -> false)      *
*  사용되는 Function : None                                         *
********************************************************************/
function isFieldBlank(theField) 
{ fnNullCheck
    var str = theField.value;
    var len = removeSpace(str).length;
    
    return(str == "" || len == 0) ? true : false;
} 

/********************************************************************
*  Function Name : isOptionBlank()                                  *
*  Description   : input Data에 대해 Null Check                     *
*  Input Data    : theField                                         *
*  Output Data   : true/false (Null -> true, notNull -> false)      *
*  사용 Function : None                                             *
********************************************************************/
function isOptionBlank(theField) 
{ 
    var str = theField.options[theField.selectedIndex].value;
        return(str == "" || str.charAt(0) == " ") ? true : false;
} 


/********************************************************************
*  Function Name : isNumeric()                                      *
*  Description   : input Data 가 숫자형인지 Check                   *
*  Input Data    : theField                                         *
*  Output Data   : true/false (숫자형 -> true, 문자형 -> false)     *
*  사용 Function : token()                                          *
********************************************************************/
function isNumeric(theField)
{
	var result = token(theField);
	return(result == "invalid" || result == "float") ? false : true;
}


/********************************************************************
*  Function Name : isNumber()                                       *
*  Description   : input Data 가 숫자형인지 Check                   *
*  Input Data    : theField                                         *
*  Output Data   : true  - 숫자형                                   *
*                  false - 문자형                                   *
*                                                                   *
*  사용 Function : token()                                          *
********************************************************************/
function isNumber(theField)
{
	var result = token(theField);
	
	return(result == "invalid") ? false : true;
}


/********************************************************************
*  Function Name : isDigit()                                        *
*  Description   : input Data가 0 ~ 9 사이의 값을 갖는지 Check      *
*  Input Data    : num                                              *
*  Output Data   : true/false                                       *
*  사용 Function : None                                             *
********************************************************************/
function isDigit(num)
{
    return(num >= "0" && num <= "9") ? true : false; 
}


/********************************************************************
*  Function Name : token()                                          *
*  Description   : Input Data 가 integer형 인지 float형 인지 Check  *
*  Input Data    : theField                                         *
*  Output Data   : ctype (integer/float/invalid)                    *
*  사용 Function : isDigit()                                        *
********************************************************************/
function token(theField)
{
    var Status = 0;
    var num    = 0;
    var ctype  = "";
    var i;
    
    i = 0;

    while(i < theField.value.length) {
    	
        num = theField.value.charAt(i);
        
        if(Status == 0) {
            if(isDigit(num)) {
                Status = 1;
                i++;  
            }
            else {
                Status = 10;       // invalid number
                break;
            }
        }
        else if(Status == 1) {
            if(isDigit(num)) {
                Status = 1;        // integer
                i++;
            }
            else if(num == ".") {
                Status = 2;        // is float number
                i++;
            }
            else {
                Status = 10;       // invalid number
                break;
            }
        }
        else if(Status == 2) {
            if(isDigit(num)) {
                i++;
            }
            else {
                Status = 10;
                break;
            }
        }
    }

    if(Status == 1)       ctype = "integer";
    else if(Status == 2)  ctype = "float";
    else if(Status == 10) ctype = "invalid";

    return ctype;
}


/********************************************************************
*  Function Name : removeSpace()                                    *
*  Description   : Input Data 의 Space를 제거한다.                  *
*  Input Data    : str                                              *
*  Output Data   : tar                                              *
*  사용 Function : None                                             *
********************************************************************/
function removeSpace(str)
{
    var src = new String(str);
    var tar = new String();
    var i, len = src.length;

    for(i = 0;i < len;i++) {
        if(src.charAt(i) != " ") {
            tar = tar + src.charAt(i);
        }
    }
    
    return tar;
}


/********************************************************************
*  Function Name : changeSpace()                                    *
*  Description   : Input Data 의 Space를 '+'로 변경한다.            *
*  Input Data    : str                                              *
*  Output Data   : tar                                              *
*  사용 Function : None                                             *
********************************************************************/
function changeSpace(str)
{
    var src = new String(str);
    var tar = new String();
    var i, len = src.length;

    for(i = 0;i < len; i++) {
        if(src.charAt(i) == " ")
            tar += "+";
        else
            tar += src.charAt(i);
    }
    return tar;
}


/********************************************************************
*  Function Name : xReplace()                                       *
*  Description   : 문자열(orgstr)에서 문자(findtxt)와 같은          *
*                  문자를 찾아 문자(replacetxt)로 변경한다.         *
*                  예) "aabbcc","b","x" -> "aaxxcc"                 *
*  Input Data    : orgstr, findtxt, replacetxt                      *
*  Output Data   : orgstr                                           *
*  사용 Function : None                                             *
********************************************************************/
function xReplace(orgstr, findtxt, replacetxt)
{
    var pos = 0;
    
    pos = orgstr.indexOf(findtxt)
    
    while(pos != -1) {
        prestring  = orgstr.substring(0, pos);
        poststring = orgstr.substring(pos + findtxt.length, orgstr.length);
        orgstr = prestring + replacetxt + poststring;
        pos = orgstr.indexOf(findtxt);
    }
    
    return orgstr;
}


/********************************************************************
*  Function Name : convertToUpperCase()                             *
*  Description   : 문자열(orgstr)을 대문자로 변경한다.              *
*                  예) "aabbcc" -> "AABBCC"                         *
*  Input Data    : theField                                         *
*  Output Data   : None                                             *
*  사용 Function : toUpperCase                                      *
********************************************************************/
function convertToUpperCase(fieldObject)
{
    fieldObject.value = fieldObject.value.toUpperCase();
}

/********************************************************************
*  Function Name : isValidFloat()                                   *
*  Description   : 소수의 유효성을 체크한다.                        *
*  Input Data    : theField, intNum, ptNum                          *
*                  예) "111.22" -> intNum:3, ptNum=2                *
*  Output Data   : true/false                                       *
*  사용 Function : toUpperCase                                      *
********************************************************************/
function isValidFloat(theField, intNum, ptNum) {
	
	if ( !isNumber(theField) ) {
		alert('숫자를 입력하세요');
		return false;
	}	
	
    value = new String(theField.value);
    ptindex = value.indexOf('.');
    if (ptindex != -1) {
        intstr = value.substring(0, ptindex);
        ptstr  = value.substring(ptindex+1, value.length);

        if (intstr.length > intNum) {
            alert('자리수 초과입니다.');
            return false;
        }    
        
        if (ptstr.length > ptNum) {
            alert('소수점이하 ' + ptNum + '까지 입력할 수 있습니다.');
            return false;
        }
        if (ptstr.indexOf('.') != -1) {
            alert('소수점위치가 잘못되었습니다.');
            return false;
        }    
    } else {
        if (value.length > intNum) {
            alert('자리수 초과입니다.');
            return false;
        }
    }
    return true;        
}    


/********************************************************************
*  Function Name : isEngChar()                                      *
*  Description   : 영문자 입력을 체크한다.                          *
*  Input Data    : theField, stNum, edNum                           *
*                  예) "ABC11122" -> num:3                          *
*  Output Data   : true/false                                       *
*  사용 Function : None                                             *
********************************************************************/
function isEngChar(theField, stNum, edNum) {
	value = theField.value;
	
	for (i=stNum; i < edNum; i++) {
		ch = value.charAt(i);
		
		if ( (ch < 'A' || ch > 'Z') && (ch < 'a' || ch > 'z') ) {
			alert('앞' + edNum + '자리가 영문자이어야 합니다.');
			return false;
		}	
	}	
	return true;
}

/********************************************************************
*  Function Name : setComma()                                       *
*  Description   : 3자리 마다 ','를 삽입한다.                       *
*  Input Data    : field - text input type                          *
*                  예) "12345.12" -> "123,45.12"                    *
*  Output Data   : String                                           *
*  사용 Function : None                                             *
********************************************************************/

function setComma( field ){
	num = field.value;
	len = 0;
	
	// 계산할 값이 없으면 return
	if( num == "" ) return "";
	// 소숫점의 위치를 찾는다.
	point = num.indexOf( '.' );
	
	// 소숫점의 위지를 못찾으면 계산 길이는 값의 길이가 되고
	if( point == -1 ) len = num.length
	
	// 소숫점의 위치를 찾으면 계산 길이는 소수점 앞자리 까지가 된다.
	else len = point;
	
	// 값에서 계산할 부분만 잘래내고
	newnum = num.substring(0,len);
	
	// 뒤에서부터 3자리씩 잘라서 저장할 배열을 만든다.
	numarray = new Array( len/3 + 1 );
	index = 0;
	
	// 뒤에서부터 3자리씩 잘라서 배열에 저장하고
	for( i = len ; i > 0 ; i -= 3 ){
		numarray[index] = newnum.substring(i - 3, i );
		index++;
	}
	newnum = "";

	// 배열의 뒷부분부터 , 와 함께 붙여 나간다.
	for( i = index-1; i >= 0 ;i-- ){
		if( i < (index-1) ) newnum += ","; // 맨 앞에 , 가 오지 않도록 한다.
		newnum += numarray[i];
	}
	
	// 소숫점이하 값이 있으면 마지막에 붙여 준다.
	if( point > -1 ) newnum += num.substring( point, num.length );
	
	// , 를 삽입한 문자열을 return
	return newnum;
}

function removeComma( field ){
	value = field.value;

	// 계산할 값이 없으면 return
	if( value == "" ) return "";
	i = 0;
	comma = 0;
	newValue = "";

	while( i < value.length ){
		// 현재의 위치부터 ','의 위치를 찾는다.
		comma = value.indexOf(',',i);
		
		// ','의 위치를 못찾은경우 - 현재의 위치부터 마지막까지 추가 한다.
		// 더이상 추가할 값이 없으므로 루프를 빠져 나간다.
		if( comma == -1 ){
			 newValue += value.substring(i, value.length );
			 break;
		}
		// 현재의 위치부터 ','의 위치 앞까지 추가 한다.
		// 현재의 위치를 찾은 ','의 위치 다음으로 설정한다.
		else{
			newValue += value.substring(i,comma );
			i = comma+1;
		}
	} 

	return newValue;
}

function comma_delete(fvalue) {
  
  var rtnValue = "";
  
  if (fvalue.length > 0 ) {

    for (z=0; z<fvalue.length; z++)                                                              
      if (fvalue.substring(z,z+1) != ',')
        rtnValue = rtnValue + fvalue.substring(z,z+1);
  
  }

  return rtnValue;
}

function comma_insert(str) {

	var s_temp = '';
	var val;
	var jj = 1;
        str = str.toString();
	val = str.replace(/,/g,"");
	for(var ii= val.length-1;ii >= 0 ;ii--)
	{
		if(jj%3 == 1 && jj > 3) s_temp = "," + s_temp;
		s_temp = val.charAt(ii) + s_temp;
		jj++;		
	}
	
	return s_temp;
}

/********************************************************************
*  Function Name : isValidLength()                                  *
*  Description   : 자리수를 체크한다.                               *
*  Input Data    : theField, len                                    *
*  Output Data   : true/false                                       *
*  사용 Function : None                                             *
********************************************************************/
function isValidLength(str, theField, len) {
	if (theField.value.length != len) {
		alert(str + len + ' 자리를 입력해야합니다.');
		return false;
	} else {
		return true;
	}
}
/********************************************************************
*  Function Name : setFloor()                                       *
*  Description   : 소수점 이하 자리수를 조절한다.                   *
*  Input Data    : numstr - 숫자 string                             *
*                  예) 1234.6789....                                *
*  Output Data   : String                                           *
*                  예) 1234.67, 1234.01, 1234,1                     *
*  사용 Function : None                                             *
********************************************************************/
function setFloor( str )
{
    var pos = 0;    
    var buf = "";
    var temp = "";   
    
    if( str == "" ) return "0";
   
    pos = str.indexOf(".");
    if( pos < 0 ) return str;
                                
    if( ( str.length - pos ) > 2 )
        buf = str.substring( pos+1, pos+3 );
    else 
        buf = str.substring( pos+1, str.length );
                      
    var i = 0;
    for( i = buf.length; i > 0; i-- ){
        if( buf.charAt(i-1) != '0' ) break;    
    }
    
    if( i > 0 ) 
        buf = buf.substring(0, i);
   
    var lvalue = parseFloat(buf);
  
    if( lvalue > 0 )
        temp = "."+buf;
        
    return str.substring(0, pos)+temp;
    
}

/*
' ------------------------------------------------------------------
' Function    : fc_chk_byte(aro_name)
' Description : 입력한 글자수를 체크
' Argument    : Object Name(글자수를 제한할 컨트롤)
' Return      : 
' ------------------------------------------------------------------
*/
function fc_chk_byte(aro_name,ari_max) {
   var ls_str     = aro_name.value; // 이벤트가 일어난 컨트롤의 value 값
   var li_str_len = ls_str.length;  // 전체길이

   // 변수초기화
   var li_max      = ari_max; // 제한할 글자수 크기
   var i           = 0;  // for문에 사용
   var li_byte     = 0;  // 한글일경우는 2 그밗에는 1을 더함
   var li_len      = 0;  // substring하기 위해서 사용
   var ls_one_char = ""; // 한글자씩 검사한다
   var ls_str2     = ""; // 글자수를 초과하면 제한할수 글자전까지만 보여준다.

   for(i=0; i< li_str_len; i++) {
      // 한글자추출
      ls_one_char = ls_str.charAt(i);

      // 한글이면 2를 더한다.
      if (escape(ls_one_char).length > 4) {
         li_byte += 2;
      }
      // 그밗의 경우는 1을 더한다.
      else
      {
         li_byte++;
      }

      // 전체 크기가 li_max를 넘지않으면
      if(li_byte <= li_max)
      {
         li_len = i + 1;
      }
   }
   
   // 전체길이를 초과하면
   if(li_byte > li_max)  {
      alert( li_max + " 글자를 초과 입력할수 없습니다. \n 초과된 내용은 자동으로 삭제 됩니다. ");
      ls_str2 = ls_str.substr(0, li_len);
      aro_name.value = ls_str2;
      
   }
   aro_name.focus();   
}

/*
' ------------------------------------------------------------------
' Function    : fc_chk2()
' Description : Enter키를 못치게한다.
' Argument    : 
' Return      : 
' ------------------------------------------------------------------
*/
function fc_chk2()
{
   if(event.keyCode == 13)
      event.returnValue=false;
}

/*
' ------------------------------------------------------------------
' Function    : FormatNumber3()
' Description : 숫자입력 사용하게한다
' Argument    : 
' Return      : 
' ------------------------------------------------------------------
*/
function FormatNumber2(num){
	fl=""
	if(isNaN(num)) { alert("문자는 사용할 수 없습니다.");return 0}
	if(num==0) return num

	if(num<0){ 
		num=num*(-1)
		fl="-"
	}else{
		num=num*1 //처음 입력값이 0부터 시작할때 이것을 제거한다.
	}
	num = new String(num)
	temp=""
	co=3
	num_len=num.length
	while (num_len>0){
		num_len=num_len-co
		if(num_len<0){co=num_len+co;num_len=0}
		temp=","+num.substr(num_len,co)+temp
	}
	return fl+temp.substr(1)
}

function FormatNumber3(num){
	num=new String(num)
	num=num.replace(/,/gi,"")
	return FormatNumber2(num)
}

function num_check() {
	// ie에서만 작동
	var keyCode = event.keyCode

	if((event.keyCode >= 96 && event.keyCode <= 105) || (event.keyCode >= 48 && event.keyCode <= 57) ||
    event.keyCode == 8  || event.keyCode == 46  || event.keyCode == 9 || event.keyCode == 37 ||
    event.keyCode == 39 || event.keyCode == 45  || event.keyCode == 18 || event.keyCode == 17 || 
    event.keyCode == 188 || event.keyCode == 13){
    return true;
  } else {
  	alert("문자는 사용할 수 없습니다."+"["+keyCode+"]");
		event.returnValue=false;	
	}
}

/*
' ------------------------------------------------------------------
' Function    : fnNullCheck()
' Description : 필수항목 체크
' Argument    : 
' Return      : 
' ------------------------------------------------------------------
*/
function fnNullCheck(obj, msg) {
	var str = obj.value;
    var len = removeSpace(str).length;
    
    if (str == "" || len == 0) {
        alert("[" + msg + "] 항목을 입력하시기 바랍니다.");
        obj.focus();
        return true;
    }
    return false;
}

function fnNullCheck_eng(obj, msg) {
	var str = obj.value;
    var len = removeSpace(str).length;
    
    if (str == "" || len == 0) {
        alert("[" + msg + "] Please enter an entry.");
        obj.focus();
        return true;
    }
    return false;
}

function removeSpace(str) {
    var src = new String(str);
    var tar = new String();
    var i, len = src.length;

    for(i = 0;i < len;i++) {
        if(src.charAt(i) != " ") tar = tar + src.charAt(i);
    }
    
    return tar;
}

//	#####	Move Next Object Focus		#####
function nextFocus(obj1, len, obj2) {
	if ( obj1.value.length == len) {
		obj2.focus();
	}
}

function isTopEnter(obj1) {
	if(window.event.keyCode == 13)
		obj1.focus();
}	

// 첨부파일 확장자 필터링
function chkFileFilter(obj) {
	var srcName = obj.value;
    var str =  new String(srcName).toLowerCase();

    if(str.lastIndexOf("jpeg") > -1 || str.lastIndexOf("jpg") > -1 || str.lastIndexOf("gif") > -1 || str.lastIndexOf("jpe") > -1 || str.lastIndexOf("txt") > -1 || str.lastIndexOf("hwp") > -1 || str.lastIndexOf("xls") > -1 || str.lastIndexOf("ppt") > -1 || str.lastIndexOf("pdf") > -1 || str.lastIndexOf("zip") > -1 || str.lastIndexOf("doc") > -1 || str.lastIndexOf("png") > -1 || str == '') {
    	return true;
    } else {
        alert('첨부가능한 파일이 아닙니다.');
        return false;
    }
}  

// 첨부파일 확장자 필터링(이미지만)
function chkFileFilter_img(obj) {
	var srcName = obj.value;
    var str =  new String(srcName).toLowerCase();

    if(str.lastIndexOf("jpeg") > -1 || str.lastIndexOf("jpg") > -1 || str.lastIndexOf("gif") > -1 || str.lastIndexOf("jpe") > -1 || str == '') {
    	return true;
    } else {
        alert('첨부가능한 파일이 아닙니다.');
        return false;
    }
}  

// 이름은 띄어쓰기 없이 한글로만 입력받음.
function onlyHan(objtext1) {
	var inText = objtext1.value;
	var ret;

	for (var i = 0; i < inText.length; i++) {
	    ret = inText.charCodeAt(i);
		if (ret > 31 && ret < 127) {
			alert("띄어쓰기 없이 한글로만 입력하세요");
			objtext1.value = "";
			objtext1.focus();
			return false;
		}
	}
	return true;
}

// 아이디 확인(아이디, 시작문자수, 끝문자수
function isID(objtext1, sLen, eLen) {
	var inText = objtext1.value;
      
 	if(inText.length < sLen || inText.length > eLen) return false;

	for(var i = 0; i < inText.length; i++) {
  	var chr = inText.substr(i,1);         
         	
    if((chr < '0' || chr > '9') && (chr < 'a' || chr > 'z')) return false;
 	}
 	return true;   
}

//비밀번호에 문자로만 되어 있는지 확인
function passonlyEng(objtext1) {
	var inText = objtext1.value;
	var ret;
	var j = 0;
				
	var alpha_num_Str = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
		
	for (var i = 0; i < inText.length; i++) {
		var substr = inText.substring(i,i+1);		
					
		if (alpha_num_Str.indexOf(substr) < 0) {
			//영문자가 아닌값				
		}	else	{
			//영문자
			j = j + 1;
		}
	}
	if (j == inText.length) {
		//영문자만 있는경우
		return false;
	}	else {
		//영문자와 다른 문자가 있는경우
		return true;
	}
}

//비밀번호에 숫자로만 되어있는지 확인
function passonlyNum(objtext1){
	var inText = objtext1.value;
	var ret;

	for (var i = 0; i < inText.length; i++) {
	    ret = inText.charCodeAt(i);
		if (!((ret > 47) && (ret < 58)))  {
			return true;
		}
	}
	return false;
}

//비밀번호에 숫자,문자로만 되어있는지 체크
function passwordChk(objtext) {
	if(!(objtext.value == "")) {
		if(passonlyNum(objtext) && passonlyEng(objtext)) {
			return true;
		}	else{
			alert("비밀번호는 영문자와 숫자의 조합으로 사용하십시오!!");
			objtext.value = "";
			objtext.focus();
			return false;		
		}
	}
}

//숫자로만 되어있는지 확인
function onlyNum(objtext1){
	if (isNumber(objtext1)) {
		return true;
	} else {	
		alert("숫자만 사용가능합니다.");
		objtext1.value = "";
		objtext1.focus();
		return false;		
	}	
}

function msgLogin(r_itcode) {
	window.open("/inc/pop_login.asp","login","width=400,height=300");
	
	var form = document.thisForm;

	form.action = "/inc/pop_login.asp";
	form.target = "login";
	form.h_cd.value = r_itcode;
	form.submit();
}	

/*
 이메일을 체크하기 위한 함수
 인수로는 element(input type=text)를 받음.

 정규 표현식 ==> 

^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$
                 ^[0-9a-zA-Z] --> 첫글자는 숫자또는 영문자
                         [-_\.]? --> - 또는 _ 또는 . 이 0번 또는 1번
                  [0-9a-zA-Z] --> 숫자또는 영문자
([-_\.]?[0-9a-zA-Z])*@ --> @앞에(-,_,. 이 0~1번, 그 뒤에는 숫자,영문자)이 한번 또는 여러번
                  [0-9a-zA-Z] --> @ 뒤에는 숫자 또는 영문자
                          [-_\.]? --> - 또는 _ 또는 . 이 0번 또는 1번
([-_\.]?[0-9a-zA-Z])*\. --> . 앞에(-,_,. 이 0~1번, 그 뒤에는 숫자,영문자)이 한번 또는 여러번
               [a-zA-Z]{2,3}$ --> . 뒤 마지막 문자열은 영문자가 2~3개

*/
function valid_email(ele) { 
 //re=/^[a-z]+([0-9\.\-]*_?\w+)*@([0-9_\.\-a-z]+)*(\w{1,3}|[0-9]{1,3})$/i; 
 re=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*[0-9a-zA-Z-]@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
 //re=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;

 if(re.test(ele)) { 
  //alert("제대로된 형식");
  return true; 
 } else { 
  alert("메일형식이 맞지 않습니다.\n다시 입력해주세요.\n"); 
  return false; 
 } 
} 

function valid_email_eng(ele) { 
 //re=/^[a-z]+([0-9\.\-]*_?\w+)*@([0-9_\.\-a-z]+)*(\w{1,3}|[0-9]{1,3})$/i; 
 re=/^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*[0-9a-zA-Z-]@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i; 
 //re=/^([\w-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/i;

 if(re.test(ele)) { 
  //alert("제대로된 형식");
  return true; 
 } else { 
  alert("The mail format is not correct.\n Please re-enter."); 
  return false; 
 } 
} 

function eScroll() {	
	/*********************************
	 * eScroll ( eNamoo scroll script )
	 * by mirrh
	 * 2006.07.16
	 ********************************/
	
	var thisObj = this;
	this.timeObj = null;
	
	/*** 설정변수 ***/
	this.mode = "top";				// 스크롤 방향 (top|left)
	this.width = "100%";			// 라인당 가로값 (pixel)
	this.height = 20;				// 라인당 높이값 (pixel)
	this.line = 1;					// 출력 라인수
	this.delay = 50;				// 스크롤후 딜레이 시간
	this.speed = 1;					// 스크롤 속도 (작을수록 빠름)
	this.id = 'obj_eScroll';		// 객체 id (클래스 다중 사용시 id 다르게 지정 요망)
	this.contents = new Array();	// 출력 내용 (배열로 내용 지정 요망)
	this.align = "left";			// 내용 aligne
	this.valign = "middle";			// 내용 valigne

	/*** 내장변수 ***/
	this.gap = 0;
	this.direction = 1;

	this.add = add;
	this.exec = exec;
	this.start = start;
	this.stop = stop;
	this.scroll = scroll;
	this.direct = direct;
	this.go = go;

	function add(str)
	{
		this.contents[this.contents.length] = str;
	}
	
	function exec()
	{
		this.basis = (this.mode == "left") ? this.width : this.height;
		var outWidth = this.width * ((this.mode == "left") ? this.line : 1);
		var outHeight = this.height * ((this.mode == "top") ? this.line : 1);
		
		var outline = "<div id=" + this.id + " style='overflow:hidden;width:" + outWidth + ";height:" + outHeight + "'><table></table></div>";
		document.write(outline);
		this.obj = document.getElementById(this.id);
		
		var tb = this.obj.appendChild(document.createElement("table"));
		var tbody = tb.appendChild(document.createElement("tbody"));
		tb.cellPadding = 0 ;
		tb.cellSpacing = 0 ;
		tb.onmouseover = function(){thisObj.stop()};
		tb.onmouseout = function(){thisObj.start()};
		
		if (this.mode=="left") var tr = tbody.appendChild(document.createElement("tr"));
		for (k in this.contents){
			if (this.mode=="top") var tr = tbody.appendChild(document.createElement("tr"));
			var td = tr.appendChild(document.createElement("td"));
			td.noWrap = true;
			td.style.width = this.width;
			td.style.height = this.height;
			td.style.textAlign = this.align;
			td.style.verticalAlign = this.valign;
			td.innerHTML = this.contents[k];
		}
		
		var len = (this.contents.length<this.line) ? this.contents.length : this.line;
		for (i=0;i<len;i++){
			if (this.mode=="top") var tr = tbody.appendChild(document.createElement("tr"));
			td = tr.appendChild(document.createElement("td"));
			td.noWrap = true;
			td.style.width = this.width;
			td.style.height = this.height;
			td.style.textAlign = this.align;
			td.style.verticalAlign = this.valign;
			td.innerHTML = this.contents[i];
		}

		this.obj.parent = this;
		this.tpoint = this.basis * this.contents.length;
		this.start();
	}

	function scroll() {
		var out = (this.mode=="left") ? this.obj.scrollLeft : this.obj.scrollTop;
		if (out%this.basis==0){
			this.gap++;
			if (this.gap>=this.delay) this.gap = 0;
		}
		if (!this.gap){
			var ret = (out==this.tpoint) ? this.direction : out + this.direction;
			if (ret<0) ret = this.tpoint + ret;
			if (this.mode=="left") this.obj.scrollLeft = ret;
			else this.obj.scrollTop = ret;
		}
	}

	function start() {
		this.timeObj = window.setInterval("(document.getElementById('" + this.id + "')).parent.scroll()",this.speed);
	}

	function stop()
	{
		clearTimeout(this.timeObj);
	}

	function direct(d)
	{
		this.direction = d;
	}

	function go()
	{
		this.stop();
		var out = (this.mode=="left") ? this.obj.scrollLeft : this.obj.scrollTop;
		var ret = (parseInt(out / this.basis) + this.direction) * this.basis;
		if (ret<0) ret = this.tpoint + ret;
		if (ret>this.tpoint) ret = this.basis;
		if (this.mode=="left") this.obj.scrollLeft = ret;
		else this.obj.scrollTop = ret;
	}

}

/*
' ------------------------------------------------------------------
' Function    : inputComma
' Description : 천단위마다 콤마찍는 스크립트
' Argument    : 
' Return      : 
' Use					: onkeyup="inputComma(this)" onkeydown="return inputNumberCheck(this, event)"
' ------------------------------------------------------------------
*/
function inputComma(f1) {
    var inputstr = f1.value;
    tmp=inputstr.split('.');
    var str = [];
    var v=tmp[0].replace(/,/gi,''); 

    for(var i=0;i<=v.length;i++){ 
      str[str.length]=v.charAt(v.length-i);
      if(i%3==0&&i!=0&&i!=v.length){
        str[str.length]='.';
      }
    }

    str=str.reverse().join('').replace(/\./gi,','); 
    f1.value = (tmp.length==2)?str+'.'+tmp[1]:str;
}

function inputNumberCheck(f1, event){
	var pointIndex = -1; 
  // .'s key code is 190 & 110, ←'s key code is 8 del's key code 46 tab's key code 9
  if (( event.keyCode<96 || event.keyCode>105) 
    &&( event.keyCode<48 || event.keyCode>57)
    && event.keyCode != 190 && event.keyCode != 110 
    && event.keyCode != 8 && event.keyCode != 46) {
    // 숫자, 소수점, del, backspace, tab을 제외한 다른 키를 무시
    if ( event.keyCode == 9 ) {
      return true;
    }
    return false;
  } 

	for( var i=0;i<f1.value.length;i++) {
  	if("."==f1.value.substring(i,i+1)) {
    // 소수점 위치
    	pointIndex = i;
      break;
     }
  }

  if ( event.keyCode == 190 || event.keyCode == 110) {
  	if ( pointIndex >= 0 ) {
    	// 소수점이 찍혀 있는 경우에 다시 소수점을 찍을 경우 무시한다. 
      return false;
    }
	} else {
  	if ( pointIndex < 0 ){
     	if ( f1.value.length >= 15 ) {
       	alert("15자리 이상 입력 할 수 없습니다.");
       	return false;
     	}
    } else {
    	if ( (f1.value.length - pointIndex) > 15 ) {
      	alert("소수점 15자리 이상 입력 할 수 없습니다.");
        return false;
      }
    }
  }
}

/****** 팝업창 리사이즈 **************************************************************/
function uf_popResize() {
	var thisX = document.getElementById("offsetTable").offsetWidth;
	var thisY = document.getElementById("offsetTable").offsetHeight;
	var maxThisX = screen.width - 50;
	var maxThisY = screen.height - 80;
	if (window.navigator.userAgent.indexOf("SV1") != -1){
	var marginY = 50; //마지막 수는 상황에따라 알맞게 넣으세요. (템플릿의 헤더높이 + 풋터 높이 + 알파)
	} else {
	var marginY = 29; //마지막 수는 상황에따라 알맞게 넣으세요. (템플릿의 헤더높이 + 풋터 높이 + 알파)
	}
	
	if (thisX > maxThisX) {
		window.document.body.scroll = "yes";
		thisX = maxThisX;
	}
	if (thisY > maxThisY - marginY) {
		window.document.body.scroll = "yes";
		thisX += 19;
		thisY = maxThisY - marginY;
	}
	
	var windowX = (screen.width - (thisX+10))/2;
	var windowY = (screen.height - (thisY+marginY))/2 - 20;
//	window.moveTo(windowX,windowY);
	//alert(thisX+10);
	//alert(thisY+marginY);
	window.resizeTo(thisX+10,thisY+marginY);
}

/****** 팝업창 리사이즈 **************************************************************/


// 저장할 변수명, 저장할변수, 일자  (1:1일, 2:2일, 365:일년)
function setCookie (name, value, expiredays) {
	var todayDate = new Date();
	todayDate.setDate( todayDate.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

function getCookie(name) {
 	var Found = false;
 	var start, end;
 	var i = 0;

 	while (i <= document.cookie.length) {
  	start = i;
  	end = start + name.length;
  	if (document.cookie.substring(start, end) == name) {
   		Found = true;
   		break;
  	}
  	i++;
 	}

 	if (Found == true) {
  	start = end + 1;
  	end = document.cookie.indexOf(';', start);
  	if (end < start) end = document.cookie.length;
  	return document.cookie.substring(start, end);
 	}
 	return '';
}

function downFile(fu,fn) {
	if (fu == "") {
		alert("대상 파일이 없습니다.");
	} else {
		location.href = "/_common/ac_downFile.asp?f_url=" + fu + "&f_name=" + encodeURIComponent(fn);
	}
}

// SNS 공유
function shareSNS(v_sns,v_title,v_url) {
	var gurl = "/_common/share_link.asp?tsite=" + v_sns + "&sns_t=" + v_title + "&sns_p=" + encodeURIComponent(v_url);
	
	window.open(gurl,"SNS_" + v_sns,"width=500px,height=500px");
}

function resizeImg(img) {
    // 원본 이미지 사이즈 저장
    var width = img.width;
    var height = img.height;
    
    // 가로, 세로 최대 사이즈 설정
    var maxWidth = 640;
    var maxHeight = 640;
    var resizeWidth;
    var resizeHeight;
    
    // 이미지 비율 구하기
    var basisRatio = maxHeight / maxWidth;
    var imgRatio = height / width;
    if (imgRatio > basisRatio) {
    // height가 기준 비율보다 길다.
        if (height > maxHeight) {
            resizeHeight = maxHeight;
            resizeWidth = Math.round((width * resizeHeight) / height);
        } else {
            resizeWidth = width;
            resizeHeight = height;
        }
        
    } else if (imgRatio < basisRatio) {
    // width가 기준 비율보다 길다.
        if (width > maxWidth) {
            resizeWidth = maxWidth;
            resizeHeight = Math.round((height * resizeWidth) / width);
        } else {
            resizeWidth = width;
            resizeHeight = height;
        }
        
    } else {
        // 기준 비율과 동일한 경우
        resizeWidth = width;
        resizeHeight = height;
    }
    
    // 리사이즈한 크기로 이미지 크기 다시 지정
    img.width = resizeWidth;
    img.height = resizeHeight;
    
    img.style.position = "";
  img.style.left = "0px";
} 


// movie
function Wmv_View(URL,SizeX,SizeY,Flag,Astr,mId){
	document.write('<object id="' + mId + '" classid="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95" standby="Loading Microsoft?Windows?Media Player components..." type="application/x-oleobject" ' );
	document.write(' width="'+SizeX+'" height="'+SizeY+'" >'                                 );
	document.write('	<param name="transparentAtStart" value="True" />'	);
	document.write('	<param name="transparentAtStop" value="True" />'	);
	document.write('	<param name="AnimationAtStart" value="True" />'	);
	if ( Astr == null || Astr != 'T' ) {
		document.write('	<param name="AutoStart" value="true" />'	);
	} else {
		document.write('	<param name="AutoStart" value="true" />'	);
	}	
	document.write('	<param name="AutoRewind" value="true" />'	);
	document.write('	<param name="DisplaySize" value="4" />'	);
	document.write('	<param name="AutoSize" value="0" />'	);
	document.write('	<param name="ShowDisplay" value="false" />'	);
	document.write('	<param name="ShowStatusBar" value="false" />'	);
	if ( Flag == null || Flag != 'F' ) {
		document.write('	<param name="ShowControls" value="true" />'	);
	} else {
		document.write('	<param name="ShowControls" value="false" />'	);
	}	
	document.write('	<param name="EnableContextMenu" value="true" />'	);
	document.write('	<param name="FileName" value="'+URL+'" />'	);
	document.write('	<param name="Volume" value="0" />'	);
	document.write('	<embed src="'+URL+'" displaysize=4 showcontrols=false autostart=1 '	);
	document.write('	width="'+SizeX+'" height="'+SizeY+'" name="' + mId + '" '	);
	document.write('	type="application/x-mplayer2" pluginspage="http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" />'   );
	document.write('	</embed></object>	'	);
}

function html_player(URL,SizeX,SizeY,Flag,Astr,mId){
	var html = "";
	html+=('<object id="kolonPlayer" name="kolonPlayer" classid="CLSID:22D6f312-B0F6-11D0-94AB-0080C74C7E95" standby="Loading Microsoft?Windows?Media Player components..." type="application/x-oleobject" ' );
	html+=(' width="'+SizeX+'" height="'+SizeY+'" >'                                 );
	html+=('	<param name="transparentAtStart" value="True" />'	);
	html+=('	<param name="transparentAtStop" value="True" />'	);
	html+=('	<param name="AnimationAtStart" value="True" />'	);
	if ( Astr == null || Astr != 'T' ) {
		html+=('	<param name="AutoStart" value="true" />'	);
	} else {
		html+=('	<param name="AutoStart" value="true" />'	);
	}	
	html+=('	<param name="AutoRewind" value="true" />'	);
	html+=('	<param name="DisplaySize" value="0" />'	);
	html+=('	<param name="AutoSize" value="false" />'	);
	html+=('	<param name="ShowDisplay" value="false" />'	);
	html+=('	<param name="ShowStatusBar" value="false" />'	);
	if ( Flag == null || Flag != 'F' ) {
		html+=('	<param name="ShowControls" value="true" />'	);
	} else {
		html+=('	<param name="ShowControls" value="false" />'	);
	}	
	html+=('	<param name="EnableContextMenu" value="true" />'	);
	html+=('	<param name="FileName" value="'+URL+'" />'	);
	html+=('	<param name="Volume" value="0" />'	);
	html+=('	<param name="ShowPositionControls" value="1" />'	);
	html+=('	<embed src="'+URL+'" displaysize=0 showcontrols=1 autostart=1 '	);
	html+=('	width="' + SizeX + '" height="' + SizeY + '" name="MediaPlayer1" '	);
	html+=('	type="application/x-mplayer2" pluginspage = "http://www.microsoft.com/Windows/Downloads/Contents/Products/MediaPlayer/" />'   );
	html+=('	</embed></object>	'	);
	document.getElementById(mId).innerHTML = html;
}

function html_player2(URL,SizeX,SizeY,Flag,Astr,mId){
	var html = "";
	html += "<object id='" + mId + "' name='" + mId + "' width='" + SizeX + "' height='" + SizeY + "' classid='CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95' type='application/x-oleobject' >";
	html += "<PARAM NAME='FileName' VALUE='" + URL + "'>";
	html += "<PARAM NAME='AutoStart' VALUE='1'>";	
	if ( Astr == null || Astr != 'T' ) {
		html += "<PARAM NAME='AutoStart' VALUE='true' />";
	} else {
		html += "<PARAM NAME='AutoStart' VALUE='true' />";
	}	
	html += "<PARAM NAME='ShowStatusBar' value='true'>";		
	html += "<PARAM NAME='ShowControls' value='1'>";	
  html += "<PARAM NAME='ShowAudioControls' value='1'>";	
	html += "<PARAM NAME='ShowPositionControls' value='1'>";	
	html += "</object>";
	document.getElementById(mId).innerHTML = html;
}
	
function playWMV(w) {
	//document.getElementById("MediaPlayer1").fileName = w;
	html_player(w,"460","300","F","T");
}

function target_showMovie(u,w,h,tgt) {
	var html = "";
	html += "<video width=\"" + w + "\" height=\"" + h + "\" controls>";
	html += "<source src=\"" + u + "\" type=\"video/mp4\">";
	html += "<source src=\"mov_bbb.ogg\" type=\"video/ogg\">";
	html += "Your browser does not support HTML5 video.";
	html += "</video>";
	document.getElementById(tgt).innerHTML = html;
}

function telValidator(args) {
    var msg = '유효하지 않는 전화번호입니다.';
    // IE 브라우저에서는 당연히 var msg로 변경
    
    if (/^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}/.test(args)) {
        return true;
    }
    // alert(msg);
    return false;
}
//-->                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             