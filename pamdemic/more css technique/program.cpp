#include<iostream.h>
using namespace std;
class Box
{
    public:
    int age;
    char name;
    void person(int age, char name);
};
void Box::person()
{
    cout<<"What's your name?\n";
    cin>>name;
    cout<<"What's your age?\n";
    cin>>age;
    cout<<"Welcome "name"-"age"\n";
}