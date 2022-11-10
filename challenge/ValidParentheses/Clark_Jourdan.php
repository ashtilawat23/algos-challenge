class Solution {
    private $regex = "/^(?'recurse'(?P>notbracket)|(?P>parenth)|(?P>square)|(?P>curly))*+$(?>(?'notbracket'[^]})({[]++)(?'parenth'\((?P>recurse)*+\))(?'square'\[(?P>recurse)*+\])(?'curly'\{(?P>recurse)*+\}))?+/s";

    /**
    * @param String $s
    * @return Boolean
    */
    function isValid($s) {
        return preg_match($this->regex, $s);
    }
}
