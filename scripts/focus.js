$(document).ready(function(e) {
	//���役��ͼ����Դ
	var picArray=[
			'images/focus1.png','images/focus2.png','images/focus3.png',
			'images/4four.jpg','images/5five.jpg','images/6six.jpg'
	];
	var titleArray=['��һ������ͼ','�ڶ�������ͼ','����������ͼ','���ĸ�����ͼ','���������ͼ','���һ��'];
	var linkArray=['#','#','#','#','#','#'];
	var para={
			focusAreaBox:"focusBox",//����ͼ������ID��Ĭ��ΪfocusAreaBox
			focusNavBox:"page",//����ͼ���ֵ�������ID��Ĭ��ΪfocusNavBox
			focusPicBox:"img",//����ͼͼƬ����ID��Ĭ��ΪfocusPicBox
			focusTitleBox:"tit",//����ͼ��������ID��Ĭ��ΪfocusTitleBox
			focusPics:picArray,//����ͼͼƬ����
			focusTitle:titleArray,//����ͼ��������
			focusLinks:linkArray,//����ͼ��������
			focusNums:3,//��Ҫ��ʾ�Ľ���ͼ������Ĭ��5��
			focusSpeed:3000,//����ͼ�Զ��л���ʱ�䣨��λ���룩��Ĭ��3��
			focusWidth:"990px",//����ͼ��ȣ�Ĭ��300px
			focusHeight:"360px"//����ͼ�߶ȣ�Ĭ��250px
	};
	var focusObj=new Focus(para);
	focusObj.run();

});