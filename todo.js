// DOM요소 선택 
const todoInput = document.getElementById('todoInput');
const addButton = document.getElementById('addButton');
const todoList = document.getElementById('todoList');

// 빈 배열 생성. 값이 변경될수도 있기 때문에 const대신 let을 사용 
let todos = []; 

// 버튼을 클릭하면 todo가 추가되도록 기능 부여
addButton.addEventListener('click',addTodo);
// 엔터키를 입력해도 todo가 추가되도록 기능 부여
todoInput.addEventListener('keydown', function(e){
    if (e.key === 'Enter') {
        addTodo();
    }
})

// addTodo 함수 작성
function addTodo() {
    const todoText = todoInput.value.trim();
    // 텍스트가 없는 상황 제외
    // trim() 함수는 앞 뒤 공백을 제거해줌
    
    todos.push(todoText); // 배열에 todotext 추가하기
    renderTodos(); // todo 목록을 그리는 함수 호출 
    saveTodo(todos); // localStorage에 저장 
    todoInput.value = ''; // 입력 필드 비우기
    
    function renderTodos() {
        todoList.innerHTML = '';
        // todos 배열을 순회하면서 각 항목을 목록으로 추가
        todos.forEach((todo, index) => {
            const li = document.createElement('li'); //리스트 아이템 생성
            li.textContent = todo; // 텍스트 설정

            // 수정 버튼 추가
            const editButton = document.createElement('button');
            editButton.textContent='✏️'
            editButton.addEventListener('click', () => {
                editTodo(index);
            });


            //삭제 버튼 추가 
            //삭제버튼을 추가하고, 버튼을 누를때 배열 속 해당 항목을 삭제
            const deleteButton = document.createElement('button');
            deleteButton.textContent='❌';
            deleteButton.addEventListener('click',() => {
                deleteTodo(index);
            });

            // 리스트 아이템에 삭제,수정 버튼 추가 
            li.appendChild(editButton);
            li.appendChild(deleteButton);

            todoList.appendChild(li); // 목록에 리스트 아이템 추가
        });
    }

    // todo 수정하는 함수
    function editTodo(index){
       
    }


    // todo 삭제하는 함수
    // 내가 선택하는 특정 인덱스만 제거해야함.. 어떻게?
    function deleteTodo(index) {
        todos.splice(index, 1); //해당 인덱스의 요소를 배열에서 제거 
        renderTodos(); // 변경된 todo 목록을 다시 그림
    }

    // 로컬 저장소에 저장하기
    function saveTodo(todos){
        localStorage.setItem
        ('todos', JSON.stringify(todos));
    }
}








