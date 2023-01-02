
def solution(low, high, img):
    answer = 0
    square_list = []

    for y, row in enumerate(img):
        rowcnt = 0
        for x, dot in enumerate(row):
            while True:
                if x+rowcnt < len(row) and img[y][x+rowcnt] == "#": 
                    rowcnt += 1
                    if rowcnt >= 3 and y + rowcnt -1 <= len(img) -1:
                        is_valid = True
                        for i in range(rowcnt):
                            if img[y+i][x] == "." or img[y+i][x+rowcnt-1] =="." or img[y+rowcnt-1][x+i] == ".":
                                is_valid = False
                                break
                        if is_valid: 
                            square_list.append([y,x, rowcnt])  
                else: rowcnt = 0; break
                
    print(square_list)
    for y, x, rowcnt in square_list:  
        k = 0
        for i in range(rowcnt -2):
            for j in range(rowcnt -2):
                if img[y+1+i][x+1+j] == "#": k += 1
        
        print(k / (rowcnt-2) ** 2 * 100)
        if low <= k / (rowcnt-2) ** 2 * 100  < high: answer +=1

    return answer

low = 0
high = 100
img = ["#########",
        "#########",
        "#########",
        "#########",
        "#########",
        "#########",
        "#########",
        "#########"]

print(solution(low, high, img))