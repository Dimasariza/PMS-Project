<?php

namespace App\Http\Requests\User;

use App\Enums\WorkPlace;
use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Enum;

class InsertUserRequest extends FormRequest
{
    use FailedValidation;

    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'username' => ['required', 'string', 'max:255', 'regex:/^\S*$/u', 'unique:users,username'],
            'fullname' => ['required', 'string', 'max:255'],
            'departmentId' => ['required', 'exists:departments,id'],
            'email' => ['required', 'email', 'max:255', 'unique:users,email'],
            'password' => ['required', 'min:8', 'max:255'],
            'userTitleId' => ['required', 'exists:user_titles,id'],
            'workPlace' => ['required', new Enum(WorkPlace::class)],
            'status' => ['required', 'boolean'],
            'document' => ['required', 'image', 'mimes:jpg,png,jpeg', 'max:1024'],
        ];
    }

    protected function prepareForValidation()
    {
        $this->merge([
            'status' => filter_var($this->get('status'), FILTER_VALIDATE_BOOLEAN),
        ]);
    }
}
