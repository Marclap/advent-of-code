#include <bits/stdc++.h>

using namespace std;

int findTrees(vector<string> data, int slopeX, int slopeY){
    int x = 0, y = 0, count = 0;
    while(y < data.size() - 1){
        x += slopeX;
        y += slopeY;
        if(x > data[0].size() - 1)
            x -= data[0].size();
        if(data[y][x] == '#')
            count++;
    }
    return count;
}

int main() {
    vector<string> data;
    string temp;
    while(cin>>temp)
        data.push_back(temp);
    int slopes1 = findTrees(data, 1, 1);
    int slopes2 = findTrees(data, 3, 1);
    int slopes3 = findTrees(data, 5, 1);
    int slopes4 = findTrees(data, 7, 1);
    int slopes5 = findTrees(data, 1, 2);
    int result = slopes1 * slopes2 * slopes3 * slopes4 * slopes5;
    cout<<result<<endl;
    cout<<slopes1<<" "<<slopes2<<" "<<slopes3<<" "<<slopes4<<" "<<slopes5<<endl;
    return 0;
}
