function parser()
{
	this.table = [[4,1,0,0],[1,2,1,0],[3,-1,-1,0],[-1,-1,-1,1],[-1,-1,-1,1]];
}
parser.prototype.evaluate = function(input, output)
{
	var index = 0;
	while(input.length != index)
	{
		var state = 0;
		index = 0;
		while(state != -1&&this.table[state][3] != 1 && index<=input.length)
		{
			state = this.table[state][this.language(input.charAt(index))];
			index+=1;
		}
		output.push(input.substring(0,index-1).replace(/"/g, ''));
		input = input.substring(index,input.length);
		index = 0;	
	}
}
parser.prototype.language = function(char)
{
	switch(char)
	{	
		case ',': return 0;
		case '"': return 1;
		default: return 2;
	}
}