class Control{
    private state :any ;
}

interface SelectableControl extends Control{
    select() :void;
}

class Button extends Control{
    select(){

    }
}

class TextBox extends Control{
    select(){
    }
}
class Image2 extends Control{

}
class Location2{
    select() {}
}
