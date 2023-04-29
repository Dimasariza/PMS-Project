<?php

namespace App\Http\Requests\User;

use App\Enums\WorkPlace;
use App\Traits\FailedValidation;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Foundation\Http\FormRequest;

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
            'fullname' => ['required', 'string', 'max:255'],
            'departmentId' => ['required', 'exists:departments,id'],
            'userTitleId' => ['required', 'exists:user_titles,id'],
            'workPlace' => ['required', new Enum(WorkPlace::class)],
            'status' => ['required', 'boolean'],
            'document' => ['nullable', 'image', 'mimes:jpg,png,jpeg', 'max:1024'],
        ];
    }
}
