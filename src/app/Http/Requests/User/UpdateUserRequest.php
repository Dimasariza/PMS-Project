<?php

namespace App\Http\Requests\User;

use App\Traits\FailedValidation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateUserRequest extends FormRequest
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
            'username' => ['required', 'string', 'max:255', Rule::unique('users', 'username')->ignore($this->id)],
            'fullname' => ['required', 'string', 'max:255'],
            'departmentId' => ['required', 'exists:departments,id'],
            'email' => ['required', 'max:255', Rule::unique('users', 'email')->ignore($this->id)],
            'userTitleId' => ['required', 'exists:user_titles,id'],
            'workPlace' => ['required', new Enum(WorkPlace::class)],
            'status' => ['required', 'boolean', 'in:true,false'],
            'document' => ['nullable'],
        ];
    }
}
