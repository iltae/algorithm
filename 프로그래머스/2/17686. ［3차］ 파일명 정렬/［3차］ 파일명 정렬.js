function solution(files) {
    return files
        .map(file => {
            const match = file.match(/^([^0-9]+)([0-9]+)(.*)$/);
            return [match[1], match[2], match[3]]; // [HEAD, NUMBER, TAIL]
        })
        .sort((a, b) => {

            const headCompare = a[0].toLowerCase().localeCompare(b[0].toLowerCase());
            if (headCompare !== 0) return headCompare;

            const numberCompare = parseInt(a[1]) - parseInt(b[1]);
            if (numberCompare !== 0) return numberCompare;

            return 0;
        })
        .map(parts => parts.join(""));
}
