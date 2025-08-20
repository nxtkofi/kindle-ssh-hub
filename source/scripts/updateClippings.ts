//TODO: function must connect to kindle via SSH
// function must search for clippings file by grepping throught he kindle /mnt/* directories>
// Then we list found *clippings*.txt files to the user an let him pick which ones he wants to
// copy to his preferred location.
// Then we `scp` the selected files into the user's preferred location while ensuring that
// previous clippings aren't overwritten

export const updateClippings = async () => {
	throw new Error('This function is not implemented yet.');
};
